import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptgpoka5c.css';
import '../../css/j/jqj7qt63o.css';
import '../../css/x/x4y2t9r2x.css';
import '../../css/y/y869nyb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptgpoka5c wm-k"/><path class="jqj7qt63o wm-a"/><path class="wm-k x4y2t9r2x"/><path class="wm-k y869nyb3b"/>`,
		"fallback": "withicons-bauhaus:pencil",
	});
}

export default Component;
