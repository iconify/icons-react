import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yup12tbhc.css';
import '../../css/t/txw5etdzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yup12tbhc"/><path class="txw5etdzl"/>`,
		"fallback": "ion:ios-photos-outline",
	});
}

export default Component;
