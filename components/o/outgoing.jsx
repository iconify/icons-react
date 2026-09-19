import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nw_ovpblz.css';
import '../../css/c/cdzn3abuu.css';
import '../../css/j/jx5x25jbu.css';
import '../../css/a/adqhtzblp.css';
import '../../css/h/hrsn06v7j.css';
import '../../css/d/dvyvd8bif.css';
import '../../css/o/oixj-dbae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="nw_ovpblz"/><path class="cdzn3abuu"/><path class="jx5x25jbu"/><path class="adqhtzblp"/><path class="hrsn06v7j"/><path class="dvyvd8bif"/><path class="oixj-dbae"/></g>`,
		"fallback": "icon-park:outgoing",
	});
}

export default Component;
