import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvzhpnn4z.css';
import '../../css/l/ljp4sfbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvzhpnn4z"/><path class="ljp4sfbmu"/>`,
		"fallback": "stash:target",
	});
}

export default Component;
