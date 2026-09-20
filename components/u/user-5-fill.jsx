import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlc6uccsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlc6uccsu"/>`,
		"fallback": "ri:user-5-fill",
	});
}

export default Component;
