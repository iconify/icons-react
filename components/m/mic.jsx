import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/is83l664r.css';
import '../../css/f/fj75b6jza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="is83l664r"/><rect class="fj75b6jza"/></g>`,
		"fallback": "lucide:mic",
	});
}

export default Component;
