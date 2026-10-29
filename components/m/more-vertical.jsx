import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m267nrnme.css';
import '../../css/b/b7kihabsw.css';
import '../../css/m/mjew-dblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m267nrnme wm-shadow"/><path class="b7kihabsw wm-k"/><path class="mjew-dblb wm-k"/>`,
		"fallback": "withicons-pastel:more-vertical",
	});
}

export default Component;
