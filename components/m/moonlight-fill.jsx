import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djlpdi26g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djlpdi26g"/>`,
		"fallback": "mingcute:moonlight-fill",
	});
}

export default Component;
