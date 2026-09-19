import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhnd-bcgx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhnd-bcgx"/>`,
		"fallback": "icons8:resize-four-directions",
	});
}

export default Component;
