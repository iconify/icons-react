import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov7zehb3m.css';
import '../../css/r/rs63jfdfq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov7zehb3m"/><path class="rs63jfdfq"/>`,
		"fallback": "energy-icons:saw-20",
	});
}

export default Component;
