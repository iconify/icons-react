import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz_ly2pcv.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz_ly2pcv"/>`,
		"fallback": "wpf:macos",
	});
}

export default Component;
