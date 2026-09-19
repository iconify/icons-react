import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ail2dgb3l.css';
import '../../css/j/jgf7k_b4d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ail2dgb3l"/><path class="jgf7k_b4d"/>`,
		"fallback": "devicon-plain:maya-wordmark",
	});
}

export default Component;
