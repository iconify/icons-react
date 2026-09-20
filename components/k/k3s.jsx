import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jro49pouc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jro49pouc"/>`,
		"fallback": "simple-icons:k3s",
	});
}

export default Component;
