import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2y6teb_s.css';
import '../../css/t/tyddiab8w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2y6teb_s"/><path class="tyddiab8w"/>`,
		"fallback": "streamline-pixel:school-science-test-flask",
	});
}

export default Component;
