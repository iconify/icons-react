import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr4es86yo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qr4es86yo"/>`,
		"fallback": "gravity-ui:layout-columns",
	});
}

export default Component;
