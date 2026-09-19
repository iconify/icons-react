import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkx8at11b.css';
import '../../css/w/wsq0amysy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkx8at11b"/><path class="wsq0amysy"/>`,
		"fallback": "devicon:monogame-wordmark",
	});
}

export default Component;
