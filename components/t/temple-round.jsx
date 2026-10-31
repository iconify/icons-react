import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvwwo4blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvwwo4blc"/>`,
		"fallback": "coolicons:temple-round",
	});
}

export default Component;
