import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw6dpjb4k.css';
import '../../css/t/t-v91db8t.css';
import '../../css/g/glwfk_a6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw6dpjb4k wm-k"/><path class="t-v91db8t wm-s"/><path class="glwfk_a6x wm-s"/>`,
		"fallback": "withicons-bauhaus:remove-formatting",
	});
}

export default Component;
