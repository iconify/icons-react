import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdco8y64r.css';
import '../../css/t/ttpvcybxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdco8y64r"/><path class="ttpvcybxr"/>`,
		"fallback": "si:pie-chart-duotone",
	});
}

export default Component;
