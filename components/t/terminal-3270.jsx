import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu63veedq.css';
import '../../css/q/qu9ohiqrz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu63veedq"/><path class="qu9ohiqrz"/>`,
		"fallback": "carbon:terminal-3270",
	});
}

export default Component;
