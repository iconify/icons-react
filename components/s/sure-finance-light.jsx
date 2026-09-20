import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aar2s783j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aar2s783j"/>`,
		"fallback": "selfhst:sure-finance-light",
	});
}

export default Component;
