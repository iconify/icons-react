import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgpsrnbfm.css';
import '../../css/y/yk4t6hbev.css';
import '../../css/v/vbnjso36t.css';
import '../../css/b/b34a8ub5s.css';
import '../../css/v/v64hmgx5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgpsrnbfm wm-k"/><path class="wm-k yk4t6hbev"/><path class="vbnjso36t wm-k"/><path class="b34a8ub5s wm-a"/><path class="v64hmgx5r wm-a"/>`,
		"fallback": "withicons-bauhaus:truck",
	});
}

export default Component;
