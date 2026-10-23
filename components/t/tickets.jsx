import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8w7kzs8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8w7kzs8f"/>`,
		"fallback": "vadivam:tickets",
	});
}

export default Component;
