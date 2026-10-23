import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq0w-2bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq0w-2bco"/>`,
		"fallback": "vadivam:sunset",
	});
}

export default Component;
