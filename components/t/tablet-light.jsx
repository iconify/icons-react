import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0hp6jb5d.css';
import '../../css/h/hzx-5b09c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0hp6jb5d"/><path class="hzx-5b09c"/>`,
		"fallback": "stash:tablet-light",
	});
}

export default Component;
