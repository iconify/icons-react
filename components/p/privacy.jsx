import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgack7b5k.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgack7b5k"/>`,
		"fallback": "wpf:privacy",
	});
}

export default Component;
