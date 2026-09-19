import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef334u3so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef334u3so"/>`,
		"fallback": "boxicons:layout",
	});
}

export default Component;
