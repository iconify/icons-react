import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvg_58ill.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvg_58ill"/>`,
		"fallback": "selfhst:surveymonkey-light",
	});
}

export default Component;
