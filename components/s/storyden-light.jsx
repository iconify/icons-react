import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu_y8ebyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu_y8ebyc"/>`,
		"fallback": "selfhst:storyden-light",
	});
}

export default Component;
