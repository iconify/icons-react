import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2x-_ybte.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2x-_ybte"/>`,
		"fallback": "streamline:prescription-pills-drugs-healthcare-solid",
	});
}

export default Component;
