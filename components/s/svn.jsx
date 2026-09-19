import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndxyiq8pj.css';
import '../../css/l/lyhf8fbbo.css';

const viewBox = {"width":33,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndxyiq8pj"/><path class="lyhf8fbbo"/>`,
		"fallback": "fontisto:svn",
	});
}

export default Component;
