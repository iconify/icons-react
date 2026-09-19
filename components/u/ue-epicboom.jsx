import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubtji8yyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubtji8yyr"/>`,
		"fallback": "cbi:ue-epicboom",
	});
}

export default Component;
