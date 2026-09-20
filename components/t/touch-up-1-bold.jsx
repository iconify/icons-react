import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onkmiv9yn.css';
import '../../css/r/rxum_jega.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onkmiv9yn"/><path class="rxum_jega"/>`,
		"fallback": "streamline-ultimate:touch-up-1-bold",
	});
}

export default Component;
