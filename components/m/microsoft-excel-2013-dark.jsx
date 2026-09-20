import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3s8cpblg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3s8cpblg"/>`,
		"fallback": "selfhst:microsoft-excel-2013-dark",
	});
}

export default Component;
