import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s71mxefap.css';
import '../../css/g/gb1459ele.css';
import '../../css/o/o8c7gnifu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="s71mxefap"/><path class="gb1459ele"/><path class="o8c7gnifu"/></g>`,
		"fallback": "icon-park:pisces",
	});
}

export default Component;
