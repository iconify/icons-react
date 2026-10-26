import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/wd6ts5fwr.css';
import '../../css/f/fkwn_s3xi.css';
import '../../css/m/mbwr7j0ds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="wd6ts5fwr"/><path class="fkwn_s3xi"/><path class="mbwr7j0ds"/></g>`,
		"fallback": "doodle-icons:refresh-cw",
	});
}

export default Component;
