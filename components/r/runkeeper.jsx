import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw8zzfb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw8zzfb7v"/>`,
		"fallback": "thesvg:runkeeper",
	});
}

export default Component;
