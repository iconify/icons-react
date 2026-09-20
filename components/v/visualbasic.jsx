import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laiykvrmt.css';
import '../../css/g/gqsxbnbla.css';
import '../../css/s/swauynb5e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laiykvrmt"/><path class="gqsxbnbla"/><path class="swauynb5e"/>`,
		"fallback": "thesvg-color:visualbasic",
	});
}

export default Component;
