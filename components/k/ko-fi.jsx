import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq22e_95b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq22e_95b"/>`,
		"fallback": "cib:ko-fi",
	});
}

export default Component;
