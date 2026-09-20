import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixku2sbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixku2sbzy"/>`,
		"fallback": "streamline-sharp:justice-scale-2",
	});
}

export default Component;
