import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvh6w0bhd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvh6w0bhd"/>`,
		"fallback": "pinhead:square-with-dot",
	});
}

export default Component;
