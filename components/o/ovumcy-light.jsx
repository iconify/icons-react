import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9jb50raj.css';
import '../../css/x/x23q6jtbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9jb50raj"/><path class="x23q6jtbs"/>`,
		"fallback": "selfhst:ovumcy-light",
	});
}

export default Component;
