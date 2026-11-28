import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwa3_zbyy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i_dg2gbxb.css';
import '../../css/c/co23gdcen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwa3_zbyy secondary"/><g class="dt0cm9dhy primary"><path class="i_dg2gbxb"/><path class="co23gdcen"/></g>`,
		"fallback": "iconaut:polaroid-duo",
	});
}

export default Component;
