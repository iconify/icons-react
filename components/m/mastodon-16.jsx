import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsallabfa.css';
import '../../css/h/hc04_ac_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsallabfa"/><path clip-rule="evenodd" class="hc04_ac_z"/>`,
		"fallback": "qlementine-icons:mastodon-16",
	});
}

export default Component;
