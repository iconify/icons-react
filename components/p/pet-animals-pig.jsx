import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj7pex86r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj7pex86r"/>`,
		"fallback": "streamline-pixel:pet-animals-pig",
	});
}

export default Component;
