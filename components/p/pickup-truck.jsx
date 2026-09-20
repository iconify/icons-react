import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzx8i8ica.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzx8i8ica"/>`,
		"fallback": "pinhead:pickup-truck",
	});
}

export default Component;
