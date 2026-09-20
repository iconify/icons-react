import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl297cw-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xl297cw-b"/>`,
		"fallback": "streamline-flex:missed-call-remix",
	});
}

export default Component;
