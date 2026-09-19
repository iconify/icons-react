import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kb9zbkb1z.css';
import '../../css/z/zmsq03bpv.css';
import '../../css/t/trcgzmrhd.css';
import '../../css/p/p1gk10bjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><circle class="kb9zbkb1z"/><path class="zmsq03bpv"/><path class="trcgzmrhd"/><path class="p1gk10bjl"/></g>`,
		"fallback": "icon-park-outline:multilayer-sphere",
	});
}

export default Component;
