import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9y477w0i.css';
import '../../css/c/cj0d3vbqu.css';
import '../../css/d/dvn5fybze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n9y477w0i"/><path class="cj0d3vbqu"/><path class="dvn5fybze"/>`,
		"fallback": "solar:rounded-magnifier-check-bold-duotone",
	});
}

export default Component;
