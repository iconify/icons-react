import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtj7l935b.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtj7l935b"/>`,
		"fallback": "wpf:past",
	});
}

export default Component;
