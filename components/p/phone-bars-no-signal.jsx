import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvjp70blq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvjp70blq"/>`,
		"fallback": "pinhead:phone-bars-no-signal",
	});
}

export default Component;
