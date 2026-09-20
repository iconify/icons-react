import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oom6lfvzo.css';
import '../../css/s/s1yxkv7dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oom6lfvzo"/><path class="s1yxkv7dc"/>`,
		"fallback": "stash:stopwatch-duotone",
	});
}

export default Component;
