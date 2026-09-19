import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdwzisbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rdwzisbqs"/>`,
		"fallback": "cuida:phone-outline",
	});
}

export default Component;
