import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6w7p4bnr.css';
import '../../css/a/aw9rmcz9o.css';
import '../../css/g/g8mz2db_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6w7p4bnr"/><path class="aw9rmcz9o"/><path class="g8mz2db_z"/>`,
		"fallback": "flag:lu-1x1",
	});
}

export default Component;
