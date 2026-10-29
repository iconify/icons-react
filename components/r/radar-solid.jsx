import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi9--gyly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi9--gyly"/>`,
		"fallback": "withicons:radar-solid",
	});
}

export default Component;
