import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsmongb3e.css';
import '../../css/r/r_bfxptlm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsmongb3e"/><path class="r_bfxptlm"/>`,
		"fallback": "ooui:link-external-ltr",
	});
}

export default Component;
