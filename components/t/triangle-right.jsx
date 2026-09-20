import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec2i-oxwx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ec2i-oxwx"/>`,
		"fallback": "pepicons-pencil:triangle-right",
	});
}

export default Component;
