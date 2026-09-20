import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go81uhbvn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go81uhbvn"/>`,
		"fallback": "pinhead:police-officer-with-stop-arm",
	});
}

export default Component;
