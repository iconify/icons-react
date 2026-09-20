import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/v/v90gbqbox.css';
import '../../css/h/hig_ndo4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="h_tsn8bxt"/><circle class="v90gbqbox"/><path class="hig_ndo4s"/></g>`,
		"fallback": "lucide-lab:onion",
	});
}

export default Component;
