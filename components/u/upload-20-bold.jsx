import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krxvcobsl.css';
import '../../css/c/c6dnn6b8v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krxvcobsl"/><path class="c6dnn6b8v"/>`,
		"fallback": "energy-icons:upload-20-bold",
	});
}

export default Component;
