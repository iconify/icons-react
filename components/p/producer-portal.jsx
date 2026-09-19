import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ozxwspm0a.css';
import '../../css/o/ouf_zdbvd.css';
import '../../css/d/d3_lg_bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ozxwspm0a"/><path class="ouf_zdbvd"/><path class="d3_lg_bwz"/></g>`,
		"fallback": "gcp:producer-portal",
	});
}

export default Component;
