import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chu61h8mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chu61h8mr"/>`,
		"fallback": "coolicons:outdent-fill-round",
	});
}

export default Component;
