import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2eqpfbnp.css';

const viewBox = {"width":389,"height":754};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2eqpfbnp"/>`,
		"fallback": "ls:j-upper-case",
	});
}

export default Component;
