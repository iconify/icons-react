import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lytt0db4y.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lytt0db4y"/>`,
		"fallback": "wpf:musical-notes",
	});
}

export default Component;
