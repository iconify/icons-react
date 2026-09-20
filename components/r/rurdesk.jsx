import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1e7ksb2s.css';
import '../../css/r/r2xn4m3wh.css';
import '../../css/y/yq64yzyqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1e7ksb2s"/><path class="r2xn4m3wh"/><circle class="yq64yzyqx"/>`,
		"fallback": "selfhst:rurdesk",
	});
}

export default Component;
