import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiav90phy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiav90phy"/>`,
		"fallback": "simple-icons:postmates",
	});
}

export default Component;
