import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5wa9vbik.css';
import '../../css/y/yxe-ar2ox.css';
import '../../css/t/t7jj3eoys.css';
import '../../css/q/qiah3-b8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5wa9vbik"/><path class="yxe-ar2ox"/><path class="t7jj3eoys"/><path class="qiah3-b8w"/>`,
		"fallback": "selfhst:ties-link-sharing-light",
	});
}

export default Component;
