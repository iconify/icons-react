import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b5eje3big.css';
import '../../css/e/euur1nf0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="b5eje3big"/><path class="euur1nf0v"/></g>`,
		"fallback": "feather:monitor",
	});
}

export default Component;
