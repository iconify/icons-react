import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmw9lxb9g.css';
import '../../css/n/n8mc1xbqp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmw9lxb9g"/><path class="n8mc1xbqp"/>`,
		"fallback": "devicon-plain:nestjs-wordmark",
	});
}

export default Component;
