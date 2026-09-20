import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfdaj08rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jfdaj08rw"/>`,
		"fallback": "token:seilor",
	});
}

export default Component;
