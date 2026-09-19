import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlmdb_b8s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlmdb_b8s"/>`,
		"fallback": "fluent-mdl2:open-in-new-window",
	});
}

export default Component;
