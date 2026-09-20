import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkxs0px9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lkxs0px9i"/>`,
		"fallback": "tdesign:table-1-filled",
	});
}

export default Component;
