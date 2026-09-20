import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht81mhbue.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ht81mhbue"/>`,
		"fallback": "streamline-flex:number-sign-remix",
	});
}

export default Component;
