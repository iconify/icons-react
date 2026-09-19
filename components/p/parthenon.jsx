import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv4wiccsr.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv4wiccsr"/>`,
		"fallback": "whh:parthenon",
	});
}

export default Component;
