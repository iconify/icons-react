import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/q/q8zv1imgh.css';
import '../../css/d/dd4j49bys.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/d/dn0f1_b1f.css';
import '../../css/f/f9urx04vy.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="q8zv1imgh"/><path class="dd4j49bys"/></g><g class="n1mjunbsu"><path class="dn0f1_b1f"/><path class="f9urx04vy"/></g>`,
		"fallback": "k8s:podsecuritypolicy",
	});
}

export default Component;
