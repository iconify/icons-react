import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk-zpbcpt.css';
import '../../css/v/v1-2libes.css';
import '../../css/g/g3rbux_4u.css';
import '../../css/a/arjsqib7z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk-zpbcpt"/><path class="v1-2libes"/><path class="g3rbux_4u"/><path class="arjsqib7z"/>`,
		"fallback": "devicon:thymeleaf-wordmark",
	});
}

export default Component;
