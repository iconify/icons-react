import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo5ibeb6h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wo5ibeb6h"/>`,
		"fallback": "pinhead:stethoscope",
	});
}

export default Component;
