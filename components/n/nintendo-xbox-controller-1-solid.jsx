import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6zo3jclh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i6zo3jclh"/>`,
		"fallback": "streamline-plump:nintendo-xbox-controller-1-solid",
	});
}

export default Component;
