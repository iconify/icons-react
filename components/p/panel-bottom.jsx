import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q9vx7bmpi.css';
import '../../css/u/um-w57aip.css';
import '../../css/k/k06x6sb9r.css';
import '../../css/e/e2hbqg24t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q9vx7bmpi wm-shadow"/><path class="um-w57aip wm-shadow"/><path class="k06x6sb9r"/><path class="e2hbqg24t"/></g>`,
		"fallback": "withicons-brutal:panel-bottom",
	});
}

export default Component;
