import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxacudx8p.css';
import '../../css/s/s4p2gkl9u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxacudx8p"/><path class="s4p2gkl9u"/>`,
		"fallback": "teenyicons:phonecall-receive-solid",
	});
}

export default Component;
