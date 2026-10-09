import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je7ywpbue.css';
import '../../css/v/v02n93nor.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je7ywpbue"/><path class="v02n93nor"/>`,
		"fallback": "energy-icons:trending-up-20-bold",
	});
}

export default Component;
