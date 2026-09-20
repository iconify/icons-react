import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-_hrufzd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-_hrufzd"/>`,
		"fallback": "selfhst:irs",
	});
}

export default Component;
