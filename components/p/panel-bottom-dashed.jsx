import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frf4fnbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frf4fnbux"/>`,
		"fallback": "vadivam:panel-bottom-dashed",
	});
}

export default Component;
