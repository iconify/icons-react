import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqqe5_blc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqqe5_blc"/>`,
		"fallback": "ix:piechart",
	});
}

export default Component;
