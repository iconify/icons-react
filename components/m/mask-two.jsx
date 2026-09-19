import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/y/yns35tu4u.css';
import '../../css/g/gczrd3bni.css';
import '../../css/n/n7urs7hsk.css';
import '../../css/v/vz1y-lh3n.css';
import '../../css/q/qoks_mjvw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="kb9zbkb1z"/><path class="yns35tu4u"/><path class="gczrd3bni"/><path class="n7urs7hsk"/><path class="vz1y-lh3n"/><path class="qoks_mjvw"/></g>`,
		"fallback": "icon-park:mask-two",
	});
}

export default Component;
