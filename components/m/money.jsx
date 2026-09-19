import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvdmyubry.css';

const viewBox = {"width":1920,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvdmyubry"/>`,
		"fallback": "fa:money",
	});
}

export default Component;
