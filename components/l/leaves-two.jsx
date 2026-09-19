import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y-tgb7atf.css';
import '../../css/x/xs_8tnxsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="y-tgb7atf"/><path class="xs_8tnxsv"/></g>`,
		"fallback": "icon-park:leaves-two",
	});
}

export default Component;
