import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxkxf8z7y.css';
import '../../css/q/qiyg0hb4a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yxkxf8z7y"/><path class="qiyg0hb4a"/>`,
		"fallback": "selfhst:punipuni",
	});
}

export default Component;
