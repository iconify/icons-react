import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t01iarbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t01iarbfq"/>`,
		"fallback": "streamline-sharp:padlock-square-2",
	});
}

export default Component;
