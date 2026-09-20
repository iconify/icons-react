import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr9yi2ure.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lr9yi2ure"/>`,
		"fallback": "teenyicons:nextjs-solid",
	});
}

export default Component;
