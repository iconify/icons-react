import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7vd29bbb.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7vd29bbb"/>`,
		"fallback": "wpf:sent",
	});
}

export default Component;
