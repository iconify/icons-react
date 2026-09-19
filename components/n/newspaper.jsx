import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbw7jyfci.css';
import '../../css/e/ebwjynfzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbw7jyfci"/><path class="ebwjynfzt"/>`,
		"fallback": "boxicons:newspaper",
	});
}

export default Component;
