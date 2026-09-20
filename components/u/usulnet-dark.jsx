import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-3wgobyz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-3wgobyz"/>`,
		"fallback": "selfhst:usulnet-dark",
	});
}

export default Component;
