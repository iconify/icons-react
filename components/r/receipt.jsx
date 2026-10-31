import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hru92mfxt.css';
import '../../css/o/oit8jiddo.css';
import '../../css/i/iqvhvkb5p.css';
import '../../css/f/f67p186iu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hru92mfxt wm-shadow"/><path class="oit8jiddo wm-shadow"/><path class="iqvhvkb5p"/><path class="f67p186iu"/></g>`,
		"fallback": "withicons-brutal:receipt",
	});
}

export default Component;
