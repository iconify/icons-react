import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-3ufwfkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-3ufwfkv"/>`,
		"fallback": "ri:remote-control-2-fill",
	});
}

export default Component;
