import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/w/wugzj3b3t.css';
import '../../css/w/wf_bemczq.css';
import '../../css/d/d5faoobga.css';
import '../../css/p/puudswb7e.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><g transform="translate(-.865 -1.034)"><ellipse class="wugzj3b3t"/><path class="wf_bemczq"/><path class="d5faoobga"/><path class="puudswb7e"/></g>`,
		"fallback": "k8s:role",
	});
}

export default Component;
