import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am-jtbb_c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am-jtbb_c"/>`,
		"fallback": "fluent-mdl2:table-group",
	});
}

export default Component;
