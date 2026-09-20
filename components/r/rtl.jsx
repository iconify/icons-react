import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxfdcub2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxfdcub2p"/>`,
		"fallback": "thesvg:rtl",
	});
}

export default Component;
