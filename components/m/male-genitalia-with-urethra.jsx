import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weqkx9bfj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weqkx9bfj"/>`,
		"fallback": "pinhead:male-genitalia-with-urethra",
	});
}

export default Component;
