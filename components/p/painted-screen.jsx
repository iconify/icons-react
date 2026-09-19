import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7245g1tp.css';
import '../../css/z/zvafccczm.css';
import '../../css/m/mq5xx16sw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="k7245g1tp"/><path class="zvafccczm"/><rect transform="rotate(90 15 29)" class="mq5xx16sw"/></g>`,
		"fallback": "icon-park:painted-screen",
	});
}

export default Component;
