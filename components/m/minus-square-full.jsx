import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjj4o5bfd.css';
import '../../css/z/zuoex-dnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjj4o5bfd"/><path class="zuoex-dnf"/>`,
		"fallback": "uim:minus-square-full",
	});
}

export default Component;
