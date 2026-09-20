import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aunjx-zeb.css';
import '../../css/c/crio6zffj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aunjx-zeb"/><path class="crio6zffj"/></g>`,
		"fallback": "streamline-sharp-color:shopping-basket-2-flat",
	});
}

export default Component;
