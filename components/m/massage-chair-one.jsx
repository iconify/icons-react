import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xy2hh2bqh.css';
import '../../css/x/xub2jjf7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xy2hh2bqh"/><path class="xub2jjf7f"/></g>`,
		"fallback": "icon-park-outline:massage-chair-one",
	});
}

export default Component;
