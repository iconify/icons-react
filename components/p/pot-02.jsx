import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8tt_bjdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8tt_bjdl"/>`,
		"fallback": "hugeicons:pot-02",
	});
}

export default Component;
