import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7k0-5d4m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n7k0-5d4m"/>`,
		"fallback": "teenyicons:snes-solid",
	});
}

export default Component;
