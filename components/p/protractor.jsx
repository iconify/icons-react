import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq85jqzsc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq85jqzsc"/>`,
		"fallback": "file-icons:protractor",
	});
}

export default Component;
