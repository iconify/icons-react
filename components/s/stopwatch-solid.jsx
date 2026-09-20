import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kav05vb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kav05vb3w"/>`,
		"fallback": "streamline-sharp:stopwatch-solid",
	});
}

export default Component;
