import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmtsn8bkk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmtsn8bkk"/>`,
		"fallback": "streamline-flex:street-road-solid",
	});
}

export default Component;
