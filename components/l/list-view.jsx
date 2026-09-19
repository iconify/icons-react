import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a8_tgdb2a.css';
import '../../css/h/hyn_enbog.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="a8_tgdb2a"/><path class="hyn_enbog"/></g>`,
		"fallback": "icon-park-outline:list-view",
	});
}

export default Component;
