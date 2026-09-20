import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayicm5b9b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayicm5b9b"/>`,
		"fallback": "radix-icons:pencil-2",
	});
}

export default Component;
