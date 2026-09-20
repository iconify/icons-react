import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jw-dxubgw.css';
import '../../css/u/u3-d4rbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jw-dxubgw"/><path class="u3-d4rbdy"/></g>`,
		"fallback": "lets-icons:search-alt-duotone",
	});
}

export default Component;
