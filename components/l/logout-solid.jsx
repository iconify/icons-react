import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4nt_319i.css';
import '../../css/a/ac_y-5bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4nt_319i"/><path class="ac_y-5bbh"/>`,
		"fallback": "basil:logout-solid",
	});
}

export default Component;
