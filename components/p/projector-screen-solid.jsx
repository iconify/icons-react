import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_1_4bc4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d_1_4bc4b"/>`,
		"fallback": "streamline-plump:projector-screen-solid",
	});
}

export default Component;
