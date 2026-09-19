import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnrwt8bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnrwt8bgs"/>`,
		"fallback": "akar-icons:sound-on",
	});
}

export default Component;
