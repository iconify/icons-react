import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bgc0-nbfy.css';
import '../../css/t/to3zx5i7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bgc0-nbfy"/><path class="to3zx5i7c"/></g>`,
		"fallback": "tabler:mail-share",
	});
}

export default Component;
