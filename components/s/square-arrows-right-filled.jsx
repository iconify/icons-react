import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeo0agb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eeo0agb5y"/>`,
		"fallback": "reicon:square-arrows-right-filled",
	});
}

export default Component;
