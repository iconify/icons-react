import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qczyu4bqk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qczyu4bqk"/>`,
		"fallback": "devicon:npm-wordmark",
	});
}

export default Component;
