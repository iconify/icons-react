import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d43m7xz-l.css';
import '../../css/x/xf9s29b3q.css';
import '../../css/e/enuyxv0hd.css';
import '../../css/h/h03ww_9cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d43m7xz-l wm-k"/><path class="wm-a xf9s29b3q"/><path class="enuyxv0hd wm-a"/><path class="h03ww_9cz wm-a"/>`,
		"fallback": "withicons-bauhaus:sliders",
	});
}

export default Component;
