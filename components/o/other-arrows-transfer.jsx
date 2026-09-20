import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t94-lt9lq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t94-lt9lq"/>`,
		"fallback": "streamline-block:other-arrows-transfer",
	});
}

export default Component;
