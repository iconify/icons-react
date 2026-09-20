import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv7g_mxtq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv7g_mxtq"/>`,
		"fallback": "selfhst:vitepress-light",
	});
}

export default Component;
