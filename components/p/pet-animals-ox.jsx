import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vks28bblc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vks28bblc"/>`,
		"fallback": "streamline-pixel:pet-animals-ox",
	});
}

export default Component;
