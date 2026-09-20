import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx8quie_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx8quie_b"/>`,
		"fallback": "uil:vertical-distribute-bottom",
	});
}

export default Component;
