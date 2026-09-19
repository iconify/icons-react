import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rzkg9v93r.css';
import '../../css/i/i56olo2az.css';
import '../../css/n/npn8u77dk.css';
import '../../css/a/apvj7jbhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rzkg9v93r"/><circle class="i56olo2az"/><path class="npn8u77dk"/><path class="apvj7jbhz"/></g>`,
		"fallback": "icon-park-solid:sickbed",
	});
}

export default Component;
