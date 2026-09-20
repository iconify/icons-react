import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of6y9uq3t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of6y9uq3t"/>`,
		"fallback": "streamline-pixel:interface-essential-keyboard-button-direction-2",
	});
}

export default Component;
