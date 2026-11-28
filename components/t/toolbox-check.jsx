import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cep8l2b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cep8l2b1n"/>`,
		"fallback": "noviair:toolbox-check",
	});
}

export default Component;
