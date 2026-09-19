import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwf_e237l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwf_e237l"/>`,
		"fallback": "ps:safe",
	});
}

export default Component;
