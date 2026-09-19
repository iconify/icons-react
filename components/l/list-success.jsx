import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aiuyamb2n.css';
import '../../css/h/hpifqdbin.css';
import '../../css/t/t9unskp3q.css';
import '../../css/y/y0n8bl3bq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="aiuyamb2n"/><circle class="hpifqdbin"/><circle class="t9unskp3q"/><path class="y0n8bl3bq"/></g>`,
		"fallback": "icon-park-solid:list-success",
	});
}

export default Component;
