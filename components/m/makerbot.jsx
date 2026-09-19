import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egkgr_f8w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egkgr_f8w"/>`,
		"fallback": "cib:makerbot",
	});
}

export default Component;
