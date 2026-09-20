import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3hf7kz4x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k3hf7kz4x"/>`,
		"fallback": "streamline-flex:toilet-man-remix",
	});
}

export default Component;
