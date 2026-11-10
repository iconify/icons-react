import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj910hkdh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bj910hkdh"/>`,
		"fallback": "sidekickicons:shield-x-mark-16-solid",
	});
}

export default Component;
