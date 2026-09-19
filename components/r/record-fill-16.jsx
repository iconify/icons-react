import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otv6zerrs.css';
import '../../css/x/xqoqyjb5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="otv6zerrs"/><circle class="xqoqyjb5v"/>`,
		"fallback": "garden:record-fill-16",
	});
}

export default Component;
