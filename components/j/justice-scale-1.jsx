import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btq4q2n4i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btq4q2n4i"/>`,
		"fallback": "streamline:justice-scale-1",
	});
}

export default Component;
