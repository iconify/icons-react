import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5ejrebmz.css';
import '../../css/b/b1k5j-d7u.css';
import '../../css/e/e12tw0b8p.css';
import '../../css/q/qrrh5951r.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5ejrebmz"/><path class="b1k5j-d7u"/><path class="e12tw0b8p"/><path class="qrrh5951r"/><path class="uymgdabjo"/>`,
		"fallback": "streamline-emojis:vulcan-salute-2",
	});
}

export default Component;
