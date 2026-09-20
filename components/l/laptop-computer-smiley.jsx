import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qggk3jboh.css';
import '../../css/t/tkr_52btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qggk3jboh"/><path class="tkr_52btl"/>`,
		"fallback": "streamline-freehand:laptop-computer-smiley",
	});
}

export default Component;
