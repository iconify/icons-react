import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdpx68b5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdpx68b5j"/>`,
		"fallback": "cib:netflix",
	});
}

export default Component;
