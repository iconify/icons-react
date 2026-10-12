import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l94gcsbcw.css';
import '../../css/m/m79wssnno.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l94gcsbcw"/><path class="m79wssnno"/>`,
		"fallback": "energy-icons:penguin-20",
	});
}

export default Component;
