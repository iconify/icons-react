import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/e/e9s8vu2sz.css';
import '../../css/b/bfr7qebqy.css';
import '../../css/h/h0n4jlbth.css';
import '../../css/z/zxzflczua.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="e9s8vu2sz"><path class="bfr7qebqy"/><path class="h0n4jlbth"/><path class="zxzflczua"/></g>`,
		"fallback": "k8s:persistentvolume",
	});
}

export default Component;
