import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3sut03us.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3sut03us"/>`,
		"fallback": "memory:note-nailed",
	});
}

export default Component;
