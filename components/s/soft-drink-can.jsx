import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wht82ihlt.css';
import '../../css/s/szx713b7u.css';
import '../../css/z/zcb21lb4e.css';
import '../../css/w/wbwfcmb3a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wht82ihlt"/><path class="szx713b7u"/><path class="zcb21lb4e"/><path class="wbwfcmb3a"/></g>`,
		"fallback": "streamline-flex-color:soft-drink-can",
	});
}

export default Component;
