import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8eqm6bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k8eqm6bga"/>`,
		"fallback": "streamline-sharp:tree-3-solid",
	});
}

export default Component;
