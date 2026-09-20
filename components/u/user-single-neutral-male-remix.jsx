import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqntpac5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cqntpac5z"/>`,
		"fallback": "streamline-plump:user-single-neutral-male-remix",
	});
}

export default Component;
