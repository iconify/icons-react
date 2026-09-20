import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcj1yhvjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcj1yhvjn"/>`,
		"fallback": "mdi:relation-zero-or-many-to-one-or-many",
	});
}

export default Component;
