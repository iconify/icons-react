import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfqkxp9kj.css';
import '../../css/v/v08-a-n6j.css';
import '../../css/o/oi80i7wcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sfqkxp9kj"/><path class="v08-a-n6j"/><path class="oi80i7wcp"/></g>`,
		"fallback": "lucide:ship-cargo",
	});
}

export default Component;
