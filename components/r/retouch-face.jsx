import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6lsn5bzb.css';
import '../../css/j/j2c1c4b4t.css';
import '../../css/p/pyhe_fr8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6lsn5bzb"/><path class="j2c1c4b4t"/><path class="pyhe_fr8y"/>`,
		"fallback": "streamline-freehand:retouch-face",
	});
}

export default Component;
