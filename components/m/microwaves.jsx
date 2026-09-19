import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_304tbab.css';
import '../../css/b/b7_599b-a.css';
import '../../css/l/l8afpfm9i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 5 34)" class="u_304tbab"/><path class="b7_599b-a"/><path class="l8afpfm9i"/></g>`,
		"fallback": "icon-park-outline:microwaves",
	});
}

export default Component;
