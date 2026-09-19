import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5f04da_o.css';
import '../../css/z/z6utj2bgt.css';
import '../../css/d/d9xymp2te.css';
import '../../css/y/yl_z4k5yt.css';
import '../../css/s/szhs4bfcc.css';
import '../../css/y/yf6a-mtmo.css';

const viewBox = {"width":99.979,"height":99.977};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5f04da_o"/><path class="z6utj2bgt"/><path class="d9xymp2te"/><path class="yl_z4k5yt"/><path class="szhs4bfcc"/><path class="yf6a-mtmo"/>`,
		"fallback": "flat-ui:pills",
	});
}

export default Component;
