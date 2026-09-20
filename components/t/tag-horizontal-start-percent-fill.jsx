import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeqmzy6dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aeqmzy6dm"/>`,
		"fallback": "keyline-icons:tag-horizontal-start-percent-fill",
	});
}

export default Component;
