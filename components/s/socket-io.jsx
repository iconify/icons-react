import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp0bzp2ut.css';
import '../../css/e/epusddcgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b tp0bzp2ut"/><path class="b epusddcgz"/>`,
		"fallback": "bxl:socket-io",
	});
}

export default Component;
