import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq2q0_lyc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq2q0_lyc"/>`,
		"fallback": "streamline:navigation-arrow-on-remix",
	});
}

export default Component;
