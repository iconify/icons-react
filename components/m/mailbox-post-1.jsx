import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm79r6b6e.css';
import '../../css/t/tfqufibtu.css';
import '../../css/o/o2gropigj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm79r6b6e"/><path class="tfqufibtu"/><path class="o2gropigj"/>`,
		"fallback": "streamline-freehand:mailbox-post-1",
	});
}

export default Component;
