import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/g/gp0egaclj.css';
import '../../css/a/a_r7bjbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="gp0egaclj"/><path class="a_r7bjbbk"/></g>`,
		"fallback": "lets-icons:view",
	});
}

export default Component;
