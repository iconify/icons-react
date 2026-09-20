import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opyq0cc4l.css';
import '../../css/w/wbunktbbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opyq0cc4l"/><path class="wbunktbbk"/>`,
		"fallback": "streamline-pixel:pet-animals-rabbit-1",
	});
}

export default Component;
