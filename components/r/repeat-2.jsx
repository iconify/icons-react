import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kilewob6b.css';
import '../../css/v/vaayiwb9p.css';
import '../../css/b/bclevdbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kilewob6b"/><path class="vaayiwb9p"/><path class="bclevdbbc"/></g>`,
		"fallback": "vadivam:repeat-2",
	});
}

export default Component;
