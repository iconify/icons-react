import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9j5775fv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x9j5775fv"/>`,
		"fallback": "streamline:rain-cloud-remix",
	});
}

export default Component;
