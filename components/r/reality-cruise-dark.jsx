import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkw_0_bqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkw_0_bqz"/>`,
		"fallback": "selfhst:reality-cruise-dark",
	});
}

export default Component;
