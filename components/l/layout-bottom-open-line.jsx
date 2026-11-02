import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r64kgzu8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r64kgzu8x"/>`,
		"fallback": "mingcute:layout-bottom-open-line",
	});
}

export default Component;
