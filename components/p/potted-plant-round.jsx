import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcn_8mzlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcn_8mzlp"/>`,
		"fallback": "coolicons:potted-plant-round",
	});
}

export default Component;
