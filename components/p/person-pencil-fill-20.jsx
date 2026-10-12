import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5v5k58ys.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5v5k58ys"/>`,
		"fallback": "garden:person-pencil-fill-20",
	});
}

export default Component;
