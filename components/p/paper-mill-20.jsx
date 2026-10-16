import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7dkymbhs.css';
import '../../css/s/sa1-qxbjq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7dkymbhs"/><path class="sa1-qxbjq"/>`,
		"fallback": "energy-icons:paper-mill-20",
	});
}

export default Component;
