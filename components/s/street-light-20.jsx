import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg4jgbz7f.css';
import '../../css/b/bfg6oocam.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg4jgbz7f"/><path class="bfg6oocam"/>`,
		"fallback": "energy-icons:street-light-20",
	});
}

export default Component;
