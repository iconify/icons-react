import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sft8kxbtp.css';
import '../../css/e/eobk2uv8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sft8kxbtp"/><path clip-rule="evenodd" class="eobk2uv8v"/>`,
		"fallback": "nrk:media-rwd",
	});
}

export default Component;
