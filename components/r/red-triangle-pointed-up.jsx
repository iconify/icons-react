import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3prhd1zs.css';
import '../../css/q/qxolmdbcj.css';
import '../../css/r/r-43rvbfc.css';
import '../../css/j/jv-2o5lvb.css';
import '../../css/d/d5foxlb8x.css';
import '../../css/w/wgy28ijrf.css';
import '../../css/f/fyxnrr9je.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGjx3zFe6q" cx="78.8" cy="69.6" r="121" gradientUnits="userSpaceOnUse"><stop offset="0" class="j3prhd1zs"/><stop offset=".85" class="qxolmdbcj"/><stop offset="1" class="qxolmdbcj"/></radialGradient></defs><path class="r-43rvbfc"/><path fill="url(#SVGjx3zFe6q)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="jv-2o5lvb"/><path class="d5foxlb8x"/><path class="wgy28ijrf"/><path class="fyxnrr9je"/>`,
		"fallback": "xero-emoji:red-triangle-pointed-up",
	});
}

export default Component;
