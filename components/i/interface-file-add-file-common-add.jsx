import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kokqq3bvy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kokqq3bvy"/>`,
		"fallback": "streamline:interface-file-add-file-common-add",
	});
}

export default Component;
