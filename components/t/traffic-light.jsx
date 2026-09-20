import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm7z09bpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm7z09bpv"/>`,
		"fallback": "uit:traffic-light",
	});
}

export default Component;
