import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7okq3bfv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7okq3bfv"/>`,
		"fallback": "dinkie-icons:otfeature-subs",
	});
}

export default Component;
