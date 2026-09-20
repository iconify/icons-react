import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc5zuv2sx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc5zuv2sx"/>`,
		"fallback": "jam:table-top-header",
	});
}

export default Component;
