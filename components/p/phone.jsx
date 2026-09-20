import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvgr61b0m.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvgr61b0m"/>`,
		"fallback": "marketeq:phone",
	});
}

export default Component;
