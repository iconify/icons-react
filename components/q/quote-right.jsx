import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ciq3bmhsq.css';

const viewBox = {"width":34,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ciq3bmhsq"/>`,
		"fallback": "fontisto:quote-right",
	});
}

export default Component;
