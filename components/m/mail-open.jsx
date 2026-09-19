import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcwx5tb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcwx5tb1f"/>`,
		"fallback": "ci:mail-open",
	});
}

export default Component;
