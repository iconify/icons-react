import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrt0i1ywq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mrt0i1ywq"/>`,
		"fallback": "streamline-flex-color:sigma-flat",
	});
}

export default Component;
