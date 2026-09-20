import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifk2jpbym.css';
import '../../css/d/danpsob9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifk2jpbym"/><path class="danpsob9t"/>`,
		"fallback": "ooui:link",
	});
}

export default Component;
