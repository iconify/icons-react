import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/q/qxob5uprc.css';
import '../../css/l/lvn_ewc7g.css';
import '../../css/u/ut14fmbhd.css';

const viewBox = {"width":18.035,"height":17.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="qxob5uprc"/><path class="lvn_ewc7g"/><path class="ut14fmbhd"/>`,
		"fallback": "k8s:persistentvolume",
	});
}

export default Component;
