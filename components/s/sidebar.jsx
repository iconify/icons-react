import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ousr7gb-s.css';
import '../../css/j/j4j_tvbpu.css';
import '../../css/s/sof-_6mix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ousr7gb-s"/><path class="j4j_tvbpu"/><path class="sof-_6mix"/>`,
		"fallback": "withicons-bauhaus:sidebar",
	});
}

export default Component;
