import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5bwus7zy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5bwus7zy"/>`,
		"fallback": "pinhead:russian-cross",
	});
}

export default Component;
