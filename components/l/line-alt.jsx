import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/ne1xewb3x.css';
import '../../css/z/zkcdoy1on.css';
import '../../css/m/msh9cmbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect transform="rotate(90 6 13)" class="ne1xewb3x"/><rect transform="rotate(-90 17 12)" class="zkcdoy1on"/><path class="msh9cmbeg"/></g>`,
		"fallback": "lets-icons:line-alt",
	});
}

export default Component;
