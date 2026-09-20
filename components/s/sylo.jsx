import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue49zyf2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue49zyf2o"/>`,
		"fallback": "token:sylo",
	});
}

export default Component;
