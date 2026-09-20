import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bxu-zvbux.css';
import '../../css/l/ly8wnrbrd.css';
import '../../css/h/ha152abug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bxu-zvbux"/><path class="ly8wnrbrd"/><path class="ha152abug"/></g>`,
		"fallback": "lucide:ribbon",
	});
}

export default Component;
