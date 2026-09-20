import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1tq20b9i.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1tq20b9i"/>`,
		"fallback": "wpf:switchcamera",
	});
}

export default Component;
