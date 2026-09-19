import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdoh43b3v.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdoh43b3v"/>`,
		"fallback": "zmdi:plaster",
	});
}

export default Component;
