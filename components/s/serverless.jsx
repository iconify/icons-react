import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh44o54vc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh44o54vc"/>`,
		"fallback": "catppuccin:serverless",
	});
}

export default Component;
