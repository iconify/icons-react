import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5kd1xbyr.css';

const viewBox = {"width":960,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5kd1xbyr"/>`,
		"fallback": "whh:ram",
	});
}

export default Component;
