import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge5bw_bum.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge5bw_bum"/>`,
		"fallback": "f7:phone-circle",
	});
}

export default Component;
