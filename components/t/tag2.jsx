import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-3m1zm3w.css';
import '../../css/a/aqk05ob5f.css';
import '../../css/i/iym8_abbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f-3m1zm3w"/><path class="aqk05ob5f"/><path class="iym8_abbt"/></g>`,
		"fallback": "reicon:tag2",
	});
}

export default Component;
