import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjyrm0bpj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjyrm0bpj"/>`,
		"fallback": "pinhead:jewel-outline",
	});
}

export default Component;
