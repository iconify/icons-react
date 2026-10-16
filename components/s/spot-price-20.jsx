import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnfksvwxf.css';
import '../../css/r/rxuug6rfw.css';
import '../../css/k/kf8qud5kt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnfksvwxf"/><path class="rxuug6rfw"/><path class="kf8qud5kt"/>`,
		"fallback": "energy-icons:spot-price-20",
	});
}

export default Component;
