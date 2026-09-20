import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de2p3kbbo.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de2p3kbbo"/>`,
		"fallback": "wpf:name",
	});
}

export default Component;
