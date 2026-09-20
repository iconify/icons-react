import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzsu600ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzsu600ut"/>`,
		"fallback": "streamline-sharp:star-2",
	});
}

export default Component;
