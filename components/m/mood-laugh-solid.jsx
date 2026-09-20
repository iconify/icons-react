import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jumlimbfi.css';
import '../../css/j/jcs69s1gm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jumlimbfi"/><path clip-rule="evenodd" class="jcs69s1gm"/>`,
		"fallback": "teenyicons:mood-laugh-solid",
	});
}

export default Component;
