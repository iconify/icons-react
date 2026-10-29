import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvnjmgbvw.css';
import '../../css/g/gxpjv3bws.css';
import '../../css/b/b_mbvxopq.css';
import '../../css/d/db9bacbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvnjmgbvw wm-shadow"/><path class="gxpjv3bws wm-k"/><path class="b_mbvxopq wm-a"/><path class="db9bacbqt wm-a"/>`,
		"fallback": "withicons-pastel:list",
	});
}

export default Component;
