import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfuz5s9ob.css';
import '../../css/q/q8fvfdcmr.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfuz5s9ob"/><path class="q8fvfdcmr"/>`,
		"fallback": "iwwa:lightbulb",
	});
}

export default Component;
