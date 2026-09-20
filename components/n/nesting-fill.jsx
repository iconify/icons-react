import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/p/p7qvggt4v.css';
import '../../css/r/rh6v-k6nx.css';
import '../../css/m/mof3eqe_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect transform="rotate(90 18 15)" class="p7qvggt4v"/><rect transform="rotate(-90 6 8)" class="rh6v-k6nx"/><path class="mof3eqe_o"/></g>`,
		"fallback": "lets-icons:nesting-fill",
	});
}

export default Component;
