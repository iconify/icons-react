import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afa51_zkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afa51_zkd"/>`,
		"fallback": "cbi:vrt-radio1",
	});
}

export default Component;
