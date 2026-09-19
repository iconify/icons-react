import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zxrxabb7c.css';
import '../../css/a/ajq-sm9bk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zxrxabb7c"/><path class="ajq-sm9bk"/></g>`,
		"fallback": "icon-park-outline:link-two",
	});
}

export default Component;
