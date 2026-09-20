import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7wyjebmp.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7wyjebmp"/>`,
		"fallback": "wpf:stack",
	});
}

export default Component;
