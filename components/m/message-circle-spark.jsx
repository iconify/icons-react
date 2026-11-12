import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqiz2uoxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqiz2uoxa"/>`,
		"fallback": "tabler:message-circle-spark",
	});
}

export default Component;
