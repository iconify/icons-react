import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxd8x6rnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxd8x6rnd"/>`,
		"fallback": "vadivam:mars-stroke",
	});
}

export default Component;
