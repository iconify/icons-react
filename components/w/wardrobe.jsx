import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/luidaefrd.css';
import '../../css/u/uc_102b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="luidaefrd"/><path class="uc_102b7y"/></g>`,
		"fallback": "lucide-lab:wardrobe",
	});
}

export default Component;
