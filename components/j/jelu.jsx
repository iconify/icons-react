import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8z507ben.css';
import '../../css/k/kv93fkbuc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8z507ben"/><path class="kv93fkbuc"/>`,
		"fallback": "selfhst:jelu",
	});
}

export default Component;
