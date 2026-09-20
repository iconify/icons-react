import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/m/mu8evp9-u.css';
import '../../css/z/za2b-fbhg.css';
import '../../css/m/mof3eqe_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect transform="rotate(90 18 15)" class="mu8evp9-u"/><rect transform="rotate(-90 6 8)" class="za2b-fbhg"/><path class="mof3eqe_o"/></g>`,
		"fallback": "lets-icons:nesting",
	});
}

export default Component;
