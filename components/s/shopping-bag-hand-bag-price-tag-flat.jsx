import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s17--g3jg.css';
import '../../css/o/o8uqzebyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s17--g3jg"/><path class="o8uqzebyu"/></g>`,
		"fallback": "streamline-sharp-color:shopping-bag-hand-bag-price-tag-flat",
	});
}

export default Component;
