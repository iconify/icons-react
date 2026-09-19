import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca5ecz53l.css';
import '../../css/o/otqe89buz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca5ecz53l"/><path class="otqe89buz"/>`,
		"fallback": "carbon:storage-pool",
	});
}

export default Component;
