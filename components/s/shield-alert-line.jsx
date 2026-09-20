import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkzr4h67j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkzr4h67j"/>`,
		"fallback": "si:shield-alert-line",
	});
}

export default Component;
