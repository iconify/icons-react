import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_jrrob8i.css';
import '../../css/r/rkiah-7xt.css';
import '../../css/s/seuct6_2l.css';
import '../../css/l/lpi15s3xt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_jrrob8i"/><path class="rkiah-7xt"/><path class="seuct6_2l"/><path class="lpi15s3xt"/>`,
		"fallback": "selfhst:radicle",
	});
}

export default Component;
