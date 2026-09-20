import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4kgr0on.css';
import '../../css/w/wsii5b33m.css';
import '../../css/n/ntguurbur.css';
import '../../css/w/wuc6jt4fd.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wj4kgr0on"><path class="wsii5b33m"/><path class="ntguurbur"/></g><path class="wuc6jt4fd"/>`,
		"fallback": "k8s:namespace",
	});
}

export default Component;
