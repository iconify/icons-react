import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye9clxgzy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye9clxgzy"/>`,
		"fallback": "devicon-plain:sketch-wordmark",
	});
}

export default Component;
