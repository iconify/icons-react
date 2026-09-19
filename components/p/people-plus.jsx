import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sg600_1ny.css';
import '../../css/f/fdqo9dbtl.css';
import '../../css/w/wv15rjmiv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sg600_1ny"/><path clip-rule="evenodd" class="fdqo9dbtl"/><path class="wv15rjmiv"/></g>`,
		"fallback": "icon-park-solid:people-plus",
	});
}

export default Component;
