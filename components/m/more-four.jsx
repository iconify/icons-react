import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/v/vnpxrmbyc.css';
import '../../css/c/c_zobnb3y.css';
import '../../css/y/y__yymjkj.css';
import '../../css/y/yiqfahr8e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><rect transform="rotate(-45 17 11)" class="vnpxrmbyc"/><rect transform="rotate(-45 30 24)" class="c_zobnb3y"/><rect transform="rotate(-45 4 24)" class="y__yymjkj"/><rect transform="rotate(-45 17 37)" class="yiqfahr8e"/></g>`,
		"fallback": "icon-park:more-four",
	});
}

export default Component;
