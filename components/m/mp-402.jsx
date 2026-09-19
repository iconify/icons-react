import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dyswr7zif.css';
import '../../css/i/iq0pnlbab.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dyswr7zif"/><path class="iq0pnlbab"/><path class="tlhsqgbia"/></g>`,
		"fallback": "hugeicons:mp-402",
	});
}

export default Component;
