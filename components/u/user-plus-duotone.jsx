import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f99tpmb6q.css';
import '../../css/q/qamjhebaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f99tpmb6q"/><path class="qamjhebaa"/>`,
		"fallback": "stash:user-plus-duotone",
	});
}

export default Component;
