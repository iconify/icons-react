import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/z/z8r2z9bly.css';
import '../../css/e/eekgs0b0l.css';
import '../../css/m/mof3eqe_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><rect transform="rotate(90 18 15)" class="z8r2z9bly"/><rect transform="rotate(-90 6 8)" class="eekgs0b0l"/><path class="mof3eqe_o"/></g>`,
		"fallback": "lets-icons:nesting-duotone",
	});
}

export default Component;
