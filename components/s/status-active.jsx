import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obl5gdplp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="obl5gdplp"/>`,
		"fallback": "pajamas:status-active",
	});
}

export default Component;
