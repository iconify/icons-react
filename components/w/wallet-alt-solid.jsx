import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z02-h_bmf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z02-h_bmf"/>`,
		"fallback": "teenyicons:wallet-alt-solid",
	});
}

export default Component;
