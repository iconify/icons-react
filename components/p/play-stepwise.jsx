import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvlht9b0k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvlht9b0k"/>`,
		"fallback": "ix:play-stepwise",
	});
}

export default Component;
