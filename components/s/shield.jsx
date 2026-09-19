import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye9gr2dqz.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye9gr2dqz"/>`,
		"fallback": "si-glyph:shield",
	});
}

export default Component;
