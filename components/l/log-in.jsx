import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq1dzob7h.css';
import '../../css/r/r811kzb8q.css';
import '../../css/a/a9_x0fs_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq1dzob7h wm-k"/><path class="r811kzb8q wm-a"/><path class="a9_x0fs_r wm-a"/>`,
		"fallback": "withicons-bauhaus:log-in",
	});
}

export default Component;
