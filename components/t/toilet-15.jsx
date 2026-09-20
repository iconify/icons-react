import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4glezq6s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4glezq6s"/>`,
		"fallback": "maki:toilet-15",
	});
}

export default Component;
