import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwx1dmp2v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwx1dmp2v"/>`,
		"fallback": "pajamas:severity-info",
	});
}

export default Component;
