import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjxey5bjp.css';
import '../../css/h/hgf0v-b3k.css';
import '../../css/c/cm-f3t2vn.css';
import '../../css/d/dyuvwzb9u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjxey5bjp"/><circle class="hgf0v-b3k"/><path class="cm-f3t2vn"/><path class="dyuvwzb9u"/>`,
		"fallback": "devicon:pytorch-wordmark",
	});
}

export default Component;
