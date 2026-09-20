import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/s/sclttp.css';
import '../../css/c/c9cwbe.css';
import '../../css/s/so-from-26.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c sclttp"/><path class="a0m25c c9cwbe"/>`,
		"fallback": "line-md:navigation-right-down",
	});
}

export default Component;
