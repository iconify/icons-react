import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov51f8b1d.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov51f8b1d"/>`,
		"fallback": "fontisto:suitcase",
	});
}

export default Component;
