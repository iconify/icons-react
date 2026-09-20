import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngo_95bsw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ngo_95bsw"/>`,
		"fallback": "streamline-color:shield-2-flat",
	});
}

export default Component;
