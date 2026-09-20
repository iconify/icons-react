import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n43-wcaxc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n43-wcaxc"/>`,
		"fallback": "pinhead:minnesota-with-capital-star",
	});
}

export default Component;
