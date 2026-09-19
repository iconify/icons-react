import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei4r2welx.css';
import '../../css/n/nt_i2cb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei4r2welx"/><path class="nt_i2cb5w"/>`,
		"fallback": "circum:power",
	});
}

export default Component;
