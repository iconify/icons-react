import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjf5pubej.css';
import '../../css/k/kzt1twblh.css';
import '../../css/x/xbxbwdb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjf5pubej"/><path class="kzt1twblh"/><path class="xbxbwdb1a"/>`,
		"fallback": "withicons-bauhaus:snowflake",
	});
}

export default Component;
