import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/k/k6r1xbcuo.css';
import '../../css/s/s4llbr6zy.css';
import '../../css/q/q-3sfjbzw.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="k6r1xbcuo"/><path class="s4llbr6zy"/><path class="q-3sfjbzw"/>`,
		"fallback": "k8s:service",
	});
}

export default Component;
