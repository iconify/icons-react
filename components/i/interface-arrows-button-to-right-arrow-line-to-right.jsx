import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okx2ihb9t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okx2ihb9t"/>`,
		"fallback": "streamline:interface-arrows-button-to-right-arrow-line-to-right",
	});
}

export default Component;
