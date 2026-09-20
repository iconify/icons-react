import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y65eipb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y65eipb5w"/>`,
		"fallback": "vadivam:users",
	});
}

export default Component;
