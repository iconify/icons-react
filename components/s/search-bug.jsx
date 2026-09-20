import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1rt8ebqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1rt8ebqe"/>`,
		"fallback": "reicon:search-bug",
	});
}

export default Component;
