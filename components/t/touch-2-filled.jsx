import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjdrzdbgw.css';
import '../../css/z/z03o25o3p.css';
import '../../css/l/lrp9thb_f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjdrzdbgw"/><path class="z03o25o3p"/><path class="lrp9thb_f"/>`,
		"fallback": "carbon:touch-2-filled",
	});
}

export default Component;
