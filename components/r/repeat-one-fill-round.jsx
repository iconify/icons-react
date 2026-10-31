import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln0v0fbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln0v0fbwf"/>`,
		"fallback": "coolicons:repeat-one-fill-round",
	});
}

export default Component;
