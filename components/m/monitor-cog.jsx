import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zecxw6bob.css';
import '../../css/o/o_b1qgb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zecxw6bob"/><path class="o_b1qgb7z"/></g>`,
		"fallback": "vadivam:monitor-cog",
	});
}

export default Component;
