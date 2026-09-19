import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b00cr1lqw.css';
import '../../css/k/kbewb6b5s.css';
import '../../css/e/ee744kfgx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b00cr1lqw"/><path class="kbewb6b5s"/><path class="ee744kfgx"/>`,
		"fallback": "carbon:scis-transparent-supply",
	});
}

export default Component;
