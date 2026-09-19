import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1c7tkr9j.css';
import '../../css/b/bqzzzebfr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1c7tkr9j"/><path class="bqzzzebfr"/>`,
		"fallback": "flat-color-icons:start",
	});
}

export default Component;
