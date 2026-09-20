import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/ww_7gw6pj.css';
import '../../css/o/o3g4rd8ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ww_7gw6pj"/><path class="o3g4rd8ni"/></g>`,
		"fallback": "keyline-icons:thumbs-down-two-tone",
	});
}

export default Component;
