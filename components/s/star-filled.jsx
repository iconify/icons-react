import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8-d7z.css';
import '../../css/m/mnwdzw.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-34.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8-d7z"/><path class="mnwdzw"/>`,
		"fallback": "line-md:star-filled",
	});
}

export default Component;
