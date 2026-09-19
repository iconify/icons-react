import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phz_w4bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phz_w4bom"/>`,
		"fallback": "gg:layout-grid-small",
	});
}

export default Component;
