import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5e10sboi.css';
import '../../css/n/n_757dk6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5e10sboi"/><path class="n_757dk6o"/>`,
		"fallback": "carbon:reminder",
	});
}

export default Component;
