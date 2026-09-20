import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfmva0bip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vfmva0bip"/>`,
		"fallback": "streamline-sharp:tailless-line-arrow-diagonal-scroll-1-remix",
	});
}

export default Component;
