import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsm3ucbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jsm3ucbnv"/>`,
		"fallback": "streamline-freehand:toilet-hand-dryer",
	});
}

export default Component;
