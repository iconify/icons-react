import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2qqo_bou.css';

const viewBox = {"width":304,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2qqo_bou"/>`,
		"fallback": "zmdi:mic-setting",
	});
}

export default Component;
