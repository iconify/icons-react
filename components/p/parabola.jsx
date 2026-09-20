import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omlq569zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omlq569zg"/>`,
		"fallback": "tdesign:parabola",
	});
}

export default Component;
