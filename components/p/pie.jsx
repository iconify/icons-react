import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omrj64z5a.css';

const viewBox = {"width":740,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omrj64z5a"/>`,
		"fallback": "il:pie",
	});
}

export default Component;
