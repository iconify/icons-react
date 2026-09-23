import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv_1wzb4e.css';
import '../../css/c/cwc7jqb5a.css';
import '../../css/i/irvj6xk3c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv_1wzb4e"/><path class="cwc7jqb5a"/><path class="irvj6xk3c"/>`,
		"fallback": "selfhst:silo-media-server-dark",
	});
}

export default Component;
