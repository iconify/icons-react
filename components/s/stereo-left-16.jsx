import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv1c6chiz.css';
import '../../css/y/y471xbw7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kv1c6chiz"/><path clip-rule="evenodd" class="y471xbw7t"/>`,
		"fallback": "qlementine-icons:stereo-left-16",
	});
}

export default Component;
