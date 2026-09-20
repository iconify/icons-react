import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt65rufct.css';
import '../../css/l/l_uk_bbco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt65rufct"/><path class="l_uk_bbco"/>`,
		"fallback": "selfhst:microsoft-onedrive-2018-dark",
	});
}

export default Component;
