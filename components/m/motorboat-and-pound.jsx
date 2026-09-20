import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dafof6oau.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dafof6oau"/>`,
		"fallback": "pinhead:motorboat-and-pound",
	});
}

export default Component;
