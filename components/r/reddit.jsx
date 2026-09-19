import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hivm86b6w.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hivm86b6w"/>`,
		"fallback": "el:reddit",
	});
}

export default Component;
