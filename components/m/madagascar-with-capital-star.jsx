import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osvwi8b0k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osvwi8b0k"/>`,
		"fallback": "pinhead:madagascar-with-capital-star",
	});
}

export default Component;
