import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/non8y593o.css';
import '../../css/b/bbclq6bps.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="non8y593o"/><path class="bbclq6bps"/>`,
		"fallback": "energy-icons:mouse-20",
	});
}

export default Component;
