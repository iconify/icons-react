import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/painj1bpj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="painj1bpj"/>`,
		"fallback": "streamline-flex:user-queen-crown-remix",
	});
}

export default Component;
