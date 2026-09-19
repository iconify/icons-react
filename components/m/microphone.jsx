import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo-kw6rdb.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo-kw6rdb"/>`,
		"fallback": "fa6-solid:microphone",
	});
}

export default Component;
