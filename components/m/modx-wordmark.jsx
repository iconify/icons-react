import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysp137yyq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysp137yyq"/>`,
		"fallback": "devicon-plain:modx-wordmark",
	});
}

export default Component;
