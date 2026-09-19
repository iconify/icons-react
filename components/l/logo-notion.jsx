import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru7ki0x_l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ru7ki0x_l"/>`,
		"fallback": "gravity-ui:logo-notion",
	});
}

export default Component;
