import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3s-podyv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x3s-podyv"/>`,
		"fallback": "healthicons:obstetricsmonia",
	});
}

export default Component;
