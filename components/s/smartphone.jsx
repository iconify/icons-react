import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h1-anpb6p.css';
import '../../css/t/tgvgklbeu.css';
import '../../css/z/zkw1kudca.css';
import '../../css/d/de1eq2fsl.css';
import '../../css/z/zhwb5cb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="h1-anpb6p wm-shadow"/><path class="tgvgklbeu wm-shadow"/><path class="zkw1kudca"/><path class="de1eq2fsl"/><path class="zhwb5cb3y"/></g>`,
		"fallback": "withicons-brutal:smartphone",
	});
}

export default Component;
