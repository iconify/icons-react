import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hib610nnk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hib610nnk"/>`,
		"fallback": "streamline-flex:signal-full-solid",
	});
}

export default Component;
