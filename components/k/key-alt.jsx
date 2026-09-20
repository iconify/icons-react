import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/x/x8eiw_bwt.css';
import '../../css/n/nc5jv0bhh.css';
import '../../css/w/wkienvanw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="x8eiw_bwt"/><circle class="nc5jv0bhh"/><path class="wkienvanw"/></g>`,
		"fallback": "lets-icons:key-alt",
	});
}

export default Component;
