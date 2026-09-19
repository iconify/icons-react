import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/m/mazv81bdt.css';
import '../../css/k/krvze5bnc.css';
import '../../css/h/hgbp8lbqj.css';
import '../../css/u/u8df5db-z.css';
import '../../css/t/tivrgubbs.css';
import '../../css/p/pscn3vw8e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="mazv81bdt"/><path class="krvze5bnc"/></g><g class="hgbp8lbqj"><path class="u8df5db-z"/><path class="tivrgubbs"/><path class="pscn3vw8e"/></g>`,
		"fallback": "flag:nf-1x1",
	});
}

export default Component;
