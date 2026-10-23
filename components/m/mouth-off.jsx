import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeh-hk-4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeh-hk-4a"/>`,
		"fallback": "vadivam:mouth-off",
	});
}

export default Component;
