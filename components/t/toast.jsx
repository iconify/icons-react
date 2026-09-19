import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grff_kb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="grff_kb6w"/>`,
		"fallback": "griddy-icons:toast",
	});
}

export default Component;
