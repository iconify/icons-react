import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbzawxtfe.css';
import '../../css/f/fhe_vac-v.css';
import '../../css/g/gifn9ew9v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbzawxtfe"/><path class="fhe_vac-v"/><path class="gifn9ew9v"/>`,
		"fallback": "energy-icons:layers-20",
	});
}

export default Component;
