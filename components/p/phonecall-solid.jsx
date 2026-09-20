import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg-731b9u.css';
import '../../css/p/pxacudx8p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg-731b9u"/><path class="pxacudx8p"/>`,
		"fallback": "teenyicons:phonecall-solid",
	});
}

export default Component;
