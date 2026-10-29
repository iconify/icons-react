import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9g4i2m7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9g4i2m7l"/>`,
		"fallback": "vadivam:panel-left",
	});
}

export default Component;
