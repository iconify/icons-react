import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r605gn10z.css';

const viewBox = {"width":1728,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r605gn10z"/>`,
		"fallback": "fa:modx",
	});
}

export default Component;
