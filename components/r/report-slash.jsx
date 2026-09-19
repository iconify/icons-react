import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i73n831_u.css';
import '../../css/x/xl9hzbxpf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i73n831_u"/><path class="xl9hzbxpf"/>`,
		"fallback": "cil:report-slash",
	});
}

export default Component;
