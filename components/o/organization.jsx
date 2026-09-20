import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shr8w08ef.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shr8w08ef"/>`,
		"fallback": "simple-line-icons:organization",
	});
}

export default Component;
