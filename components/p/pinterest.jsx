import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr00bhowv.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr00bhowv"/>`,
		"fallback": "el:pinterest",
	});
}

export default Component;
