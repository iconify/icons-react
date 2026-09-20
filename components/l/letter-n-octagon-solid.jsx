import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvoio1bat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvoio1bat"/>`,
		"fallback": "mynaui:letter-n-octagon-solid",
	});
}

export default Component;
