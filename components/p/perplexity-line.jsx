import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm2x4mzsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm2x4mzsp"/>`,
		"fallback": "ri:perplexity-line",
	});
}

export default Component;
