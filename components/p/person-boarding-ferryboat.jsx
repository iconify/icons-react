import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udl_y2bcu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udl_y2bcu"/>`,
		"fallback": "pinhead:person-boarding-ferryboat",
	});
}

export default Component;
