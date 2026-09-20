import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/wmiwpbchn.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="wmiwpbchn"/><circle class="gp0egaclj"/></g>`,
		"fallback": "majesticons:settings-cog-line",
	});
}

export default Component;
