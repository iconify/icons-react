import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0v1_wsnp.css';
import '../../css/d/dq4s8_baf.css';
import '../../css/z/zqx0zmbos.css';
import '../../css/y/ychnm4ptg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0v1_wsnp"/><path class="dq4s8_baf"/><path class="zqx0zmbos"/><path class="ychnm4ptg"/>`,
		"fallback": "selfhst:sharry-dark",
	});
}

export default Component;
