import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh59cm3yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh59cm3yg"/>`,
		"fallback": "withicons:radio-solid",
	});
}

export default Component;
