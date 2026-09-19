import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/svqy3ml4a.css';
import '../../css/b/b66lsbbtf.css';
import '../../css/l/lap40g3pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="svqy3ml4a"/><path class="b66lsbbtf"/><path class="lap40g3pl"/></g>`,
		"fallback": "hugeicons:map-pin-off",
	});
}

export default Component;
