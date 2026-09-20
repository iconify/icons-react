import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/a/aujto2tno.css';
import '../../css/v/v999r7bpq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="aujto2tno"/><path class="v999r7bpq"/></g>`,
		"fallback": "streamline-color:sign-at",
	});
}

export default Component;
