import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw_0fyb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fw_0fyb7o"/>`,
		"fallback": "stash:moon-solid",
	});
}

export default Component;
