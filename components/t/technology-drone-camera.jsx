import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhry5e73f.css';
import '../../css/l/l6xq5rb2r.css';
import '../../css/t/tr3hbtb1n.css';
import '../../css/b/b8sr0ib_j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhry5e73f"/><path class="l6xq5rb2r"/><path class="tr3hbtb1n"/><path class="b8sr0ib_j"/>`,
		"fallback": "streamline-pixel:technology-drone-camera",
	});
}

export default Component;
