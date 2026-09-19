import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz7g-qohu.css';
import '../../css/x/xafs55bpy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lz7g-qohu"/><path class="xafs55bpy"/>`,
		"fallback": "ion:md-mail-unread",
	});
}

export default Component;
