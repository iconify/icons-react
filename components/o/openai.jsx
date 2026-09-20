import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj2bkebcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj2bkebcg"/>`,
		"fallback": "meteor-icons:openai",
	});
}

export default Component;
