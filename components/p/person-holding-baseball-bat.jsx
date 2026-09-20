import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn5-p75tj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn5-p75tj"/>`,
		"fallback": "pinhead:person-holding-baseball-bat",
	});
}

export default Component;
