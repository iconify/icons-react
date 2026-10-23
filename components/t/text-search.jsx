import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atfb8ubde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atfb8ubde"/>`,
		"fallback": "vadivam:text-search",
	});
}

export default Component;
