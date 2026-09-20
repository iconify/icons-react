import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n82zcy6-h.css';
import '../../css/c/clhe_ezsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n82zcy6-h"/><path class="clhe_ezsg"/>`,
		"fallback": "prime:search",
	});
}

export default Component;
