import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxm51gybk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxm51gybk"/>`,
		"fallback": "cryptocurrency:sberbank",
	});
}

export default Component;
