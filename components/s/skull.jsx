import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/egymh8boe.css';
import '../../css/s/smshui4ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="egymh8boe"/><path class="smshui4ff"/></g>`,
		"fallback": "vadivam:skull",
	});
}

export default Component;
