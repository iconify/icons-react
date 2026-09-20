import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kujboibdf.css';
import '../../css/t/txm8quc0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kujboibdf"/><path class="txm8quc0e"/>`,
		"fallback": "streamline-ultimate:share-2-bold",
	});
}

export default Component;
