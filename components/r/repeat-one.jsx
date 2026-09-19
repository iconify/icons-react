import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmov_dv6f.css';
import '../../css/x/xzk6xmbpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmov_dv6f"/><path class="xzk6xmbpp"/>`,
		"fallback": "carbon:repeat-one",
	});
}

export default Component;
