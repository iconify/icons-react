import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyx3ri51p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyx3ri51p"/>`,
		"fallback": "ion:md-power",
	});
}

export default Component;
