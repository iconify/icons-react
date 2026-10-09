import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmh3e9bdx.css';
import '../../css/z/z_yq7-buc.css';
import '../../css/y/yg_0l029v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmh3e9bdx"/><path class="z_yq7-buc"/><path class="yg_0l029v"/>`,
		"fallback": "energy-icons:repeat-20-bold",
	});
}

export default Component;
