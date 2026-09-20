import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ziiaqvbda.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ziiaqvbda"/>`,
		"fallback": "pinhead:two-minus",
	});
}

export default Component;
