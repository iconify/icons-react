import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rzkg9v93r.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/k/ksnlu0kra.css';
import '../../css/a/apvj7jbhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rzkg9v93r"/><circle class="v3g6xoxym"/><path class="ksnlu0kra"/><path class="apvj7jbhz"/></g>`,
		"fallback": "icon-park-outline:sickbed",
	});
}

export default Component;
