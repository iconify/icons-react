import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljb72pblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljb72pblh"/>`,
		"fallback": "streamline-sharp:user-protection-1",
	});
}

export default Component;
