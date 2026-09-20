import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds6j52bpe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ds6j52bpe"/>`,
		"fallback": "streamline-flex:screwdriver-wrench-solid",
	});
}

export default Component;
