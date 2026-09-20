import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idf471b2n.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idf471b2n"/>`,
		"fallback": "wpf:stop",
	});
}

export default Component;
