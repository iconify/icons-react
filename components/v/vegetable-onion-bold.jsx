import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2bvsbcom.css';
import '../../css/l/l7cx49rxz.css';
import '../../css/d/dif39_b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2bvsbcom"/><path class="l7cx49rxz"/><path class="dif39_b1s"/>`,
		"fallback": "streamline-ultimate:vegetable-onion-bold",
	});
}

export default Component;
