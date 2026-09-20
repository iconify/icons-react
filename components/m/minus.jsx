import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_-0zmhuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_-0zmhuv"/>`,
		"fallback": "stash:minus",
	});
}

export default Component;
