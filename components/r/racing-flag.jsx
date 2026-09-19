import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s3oy3lb9g.css';
import '../../css/m/mjnwwgxpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s3oy3lb9g"/><path class="mjnwwgxpp"/></g>`,
		"fallback": "hugeicons:racing-flag",
	});
}

export default Component;
