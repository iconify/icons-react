import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm2fwabtn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm2fwabtn"/>`,
		"fallback": "teenyicons:vector-document-outline",
	});
}

export default Component;
