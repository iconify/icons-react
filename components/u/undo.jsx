import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye9asyf6g.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye9asyf6g"/>`,
		"fallback": "fa:undo",
	});
}

export default Component;
