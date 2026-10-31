import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seix-klrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="seix-klrh"/>`,
		"fallback": "coolicons:octagon-info-round",
	});
}

export default Component;
