import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaizi48jf.css';
import '../../css/t/ty867ghkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaizi48jf"/><path class="ty867ghkp"/>`,
		"fallback": "solar:shield-minus-bold-duotone",
	});
}

export default Component;
