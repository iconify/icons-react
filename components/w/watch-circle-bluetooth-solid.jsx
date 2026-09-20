import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldglyfi2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ldglyfi2p"/>`,
		"fallback": "streamline-sharp:watch-circle-bluetooth-solid",
	});
}

export default Component;
