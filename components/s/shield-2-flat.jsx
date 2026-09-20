import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drc198znd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="drc198znd"/>`,
		"fallback": "streamline-flex-color:shield-2-flat",
	});
}

export default Component;
