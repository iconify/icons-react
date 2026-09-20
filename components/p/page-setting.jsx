import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_fb8gn8g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_fb8gn8g"/>`,
		"fallback": "streamline-plump:page-setting",
	});
}

export default Component;
