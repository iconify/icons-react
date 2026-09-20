import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfwo_dbak.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfwo_dbak"/>`,
		"fallback": "streamline-block:text-formatting-in-front-image",
	});
}

export default Component;
