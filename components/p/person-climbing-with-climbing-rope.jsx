import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnjhzbbpw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnjhzbbpw"/>`,
		"fallback": "pinhead:person-climbing-with-climbing-rope",
	});
}

export default Component;
