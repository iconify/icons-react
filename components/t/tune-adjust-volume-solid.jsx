import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1cmtz2bf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1cmtz2bf"/>`,
		"fallback": "streamline-flex:tune-adjust-volume-solid",
	});
}

export default Component;
