import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq6yi9hgq.css';
import '../../css/i/icz8l1jmc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq6yi9hgq"/><path class="icz8l1jmc"/>`,
		"fallback": "energy-icons:notebook-pen-20",
	});
}

export default Component;
