import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yla7ipb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yla7ipb-e"/>`,
		"fallback": "tdesign:letters-a",
	});
}

export default Component;
