import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktvmvts2p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktvmvts2p"/>`,
		"fallback": "ant-design:radius-upright-outlined",
	});
}

export default Component;
