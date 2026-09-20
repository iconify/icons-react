import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-z1hcbtj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-z1hcbtj"/>`,
		"fallback": "streamline:pool-ladder",
	});
}

export default Component;
