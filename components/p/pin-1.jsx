import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slo_ucbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slo_ucbhv"/>`,
		"fallback": "streamline-sharp:pin-1",
	});
}

export default Component;
