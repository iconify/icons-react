import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3_cyn3bv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3_cyn3bv"/>`,
		"fallback": "pinhead:nebraska-with-capital-star",
	});
}

export default Component;
