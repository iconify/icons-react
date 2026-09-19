import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucp01pb_d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucp01pb_d"/>`,
		"fallback": "whh:moviereel",
	});
}

export default Component;
