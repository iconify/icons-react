import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iik18ybtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iik18ybtn"/>`,
		"fallback": "proicons:quote",
	});
}

export default Component;
