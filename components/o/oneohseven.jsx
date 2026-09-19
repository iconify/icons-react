import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ychaugd2x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ychaugd2x"/>`,
		"fallback": "whh:oneohseven",
	});
}

export default Component;
