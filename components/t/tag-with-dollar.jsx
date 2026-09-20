import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-02oj49z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-02oj49z"/>`,
		"fallback": "pinhead:tag-with-dollar",
	});
}

export default Component;
