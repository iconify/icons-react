import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_yxr0bmx.css';
import '../../css/t/t2eelrkyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_yxr0bmx"/><path class="t2eelrkyh"/>`,
		"fallback": "streamline-ultimate:safety-drown-hand-bold",
	});
}

export default Component;
