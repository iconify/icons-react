import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/ttixfbczm.css';
import '../../css/u/u2kk0nupc.css';
import '../../css/x/xd4v8uixa.css';
import '../../css/y/y8meh6e1m.css';
import '../../css/i/iqg723bwl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ttixfbczm"/><path class="u2kk0nupc"/><path class="xd4v8uixa"/><path class="y8meh6e1m"/><path class="iqg723bwl"/></g>`,
		"fallback": "pepicons:shuffle",
	});
}

export default Component;
