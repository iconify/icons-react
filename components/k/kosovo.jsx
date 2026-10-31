import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8dybub9u.css';
import '../../css/u/utquofbms.css';
import '../../css/z/zbsqqabff.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8dybub9u"/><path class="utquofbms"/><path class="zbsqqabff"/>`,
		"fallback": "tabler-flags:kosovo",
	});
}

export default Component;
