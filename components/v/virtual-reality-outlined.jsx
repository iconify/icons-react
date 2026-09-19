import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq7m4_bez.css';
import '../../css/m/mxlpzmyqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq7m4_bez"/><path class="mxlpzmyqt"/>`,
		"fallback": "eos-icons:virtual-reality-outlined",
	});
}

export default Component;
