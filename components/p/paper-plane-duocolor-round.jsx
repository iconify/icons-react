import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n-31ttcxg.css';
import '../../css/r/rxkg3ygff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n-31ttcxg"/><path class="rxkg3ygff"/></g>`,
		"fallback": "coolicons:paper-plane-duocolor-round",
	});
}

export default Component;
