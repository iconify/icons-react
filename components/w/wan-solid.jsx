import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n30b-7l1d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n30b-7l1d"/>`,
		"fallback": "teenyicons:wan-solid",
	});
}

export default Component;
