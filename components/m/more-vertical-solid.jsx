import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uik8bmg6s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uik8bmg6s"/>`,
		"fallback": "teenyicons:more-vertical-solid",
	});
}

export default Component;
