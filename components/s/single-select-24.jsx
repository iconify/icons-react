import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jydc_mb-y.css';
import '../../css/t/tbcp7-bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jydc_mb-y"/><path class="tbcp7-bab"/>`,
		"fallback": "octicon:single-select-24",
	});
}

export default Component;
