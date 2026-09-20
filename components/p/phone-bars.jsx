import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wntam8p1w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wntam8p1w"/>`,
		"fallback": "pinhead:phone-bars",
	});
}

export default Component;
