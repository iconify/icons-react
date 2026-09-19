import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewxyoiu2q.css';
import '../../css/z/zc4hgcctu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewxyoiu2q"/><path class="zc4hgcctu"/>`,
		"fallback": "fxemoji:oldkey",
	});
}

export default Component;
