import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvzle9bqk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvzle9bqk"/>`,
		"fallback": "cib:spdx",
	});
}

export default Component;
