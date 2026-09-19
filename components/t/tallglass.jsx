import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hczb_fq6b.css';

const viewBox = {"width":512,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hczb_fq6b"/>`,
		"fallback": "whh:tallglass",
	});
}

export default Component;
