import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw9-occkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw9-occkm"/>`,
		"fallback": "vadivam:video-off",
	});
}

export default Component;
