import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q-a08jbdb.css';
import '../../css/f/fl9dr8baw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q-a08jbdb"/><path class="fl9dr8baw"/></g>`,
		"fallback": "streamline-plump-color:location-pin-disabled-flat",
	});
}

export default Component;
