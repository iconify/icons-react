import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utxo58v5s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utxo58v5s"/>`,
		"fallback": "pinhead:speech-bubbles",
	});
}

export default Component;
