import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vzj-dzoro.css';
import '../../css/p/pd1e-5guk.css';
import '../../css/f/fknqcobwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vzj-dzoro"/><path class="pd1e-5guk"/><path class="fknqcobwx"/></g>`,
		"fallback": "tdesign:tag-state",
	});
}

export default Component;
