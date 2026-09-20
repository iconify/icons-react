import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnluvnbpz.css';
import '../../css/s/sswzleb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnluvnbpz"/><path class="sswzleb0q"/>`,
		"fallback": "streamline-ultimate:tool-box-bold",
	});
}

export default Component;
