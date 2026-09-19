import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsnsd8bak.css';
import '../../css/m/mce3-1bax.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsnsd8bak"/><path class="mce3-1bax"/>`,
		"fallback": "gis:poi-home-o",
	});
}

export default Component;
