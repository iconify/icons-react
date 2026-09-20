import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/a3y69p.css';
import '../../css/c/cquv0f.css';
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
		"content": `<path class="a0m25c a3y69p"/><path class="a0m25c cquv0f"/>`,
		"fallback": "line-md:navigation-right-up",
	});
}

export default Component;
