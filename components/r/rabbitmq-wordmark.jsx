import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u86l3ccfz.css';
import '../../css/b/b8bh25bgv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u86l3ccfz"/><path class="b8bh25bgv"/>`,
		"fallback": "devicon:rabbitmq-wordmark",
	});
}

export default Component;
