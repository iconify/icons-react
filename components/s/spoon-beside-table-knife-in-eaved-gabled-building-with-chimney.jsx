import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql5jfn30t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql5jfn30t"/>`,
		"fallback": "pinhead:spoon-beside-table-knife-in-eaved-gabled-building-with-chimney",
	});
}

export default Component;
