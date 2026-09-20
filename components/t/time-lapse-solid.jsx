import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tom9x8iww.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tom9x8iww"/>`,
		"fallback": "streamline-flex:time-lapse-solid",
	});
}

export default Component;
