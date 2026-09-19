import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vm4lbxnji.css';
import '../../css/v/vztlpvtgy.css';
import '../../css/x/xucazj__s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vm4lbxnji"/><path class="vztlpvtgy"/><path class="xucazj__s"/></g>`,
		"fallback": "icon-park-outline:red-envelopes",
	});
}

export default Component;
