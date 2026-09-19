import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w88fuybtt.css';
import '../../css/q/qu318bjex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w88fuybtt"/><path class="qu318bjex"/>`,
		"fallback": "basil:phone-in-solid",
	});
}

export default Component;
