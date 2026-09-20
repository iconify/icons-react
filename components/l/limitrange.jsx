import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/c/chpd-ob2l.css';
import '../../css/t/tzpe2lbtc.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="j-npdpb0r"><path class="chpd-ob2l"/><path class="tzpe2lbtc"/></g>`,
		"fallback": "k8s:limitrange",
	});
}

export default Component;
