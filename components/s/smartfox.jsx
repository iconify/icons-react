import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m56_hyqyp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m56_hyqyp"/>`,
		"fallback": "selfhst:smartfox",
	});
}

export default Component;
