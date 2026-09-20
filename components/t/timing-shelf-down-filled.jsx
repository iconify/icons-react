import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2euobcyk.css';
import '../../css/r/r78fl8b_u.css';
import '../../css/m/mbmho7ddy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2euobcyk"/><path class="r78fl8b_u"/><path clip-rule="evenodd" class="mbmho7ddy"/>`,
		"fallback": "lsicon:timing-shelf-down-filled",
	});
}

export default Component;
