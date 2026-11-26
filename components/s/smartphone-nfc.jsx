import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r6wirtb6h.css';
import '../../css/l/lmomo9yey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="r6wirtb6h"/><path class="lmomo9yey"/></g>`,
		"fallback": "lucide:smartphone-nfc",
	});
}

export default Component;
