import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt25qibgo.css';
import '../../css/e/e1d39acad.css';
import '../../css/t/tgryvbb4x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt25qibgo"/><path class="e1d39acad"/><path class="tgryvbb4x"/>`,
		"fallback": "energy-icons:stopwatch-20",
	});
}

export default Component;
