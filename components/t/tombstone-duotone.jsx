import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7jeh7wes.css';
import '../../css/w/wh5qu1bjh.css';
import '../../css/x/x9h1xwfff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e7jeh7wes"/><path class="wh5qu1bjh"/><path class="x9h1xwfff"/></g>`,
		"fallback": "lucide-extended:tombstone-duotone",
	});
}

export default Component;
