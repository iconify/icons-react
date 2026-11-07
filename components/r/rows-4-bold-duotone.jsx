import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nayqy1c_r.css';
import '../../css/v/vebkkh5gh.css';
import '../../css/f/fo8dlab0r.css';
import '../../css/d/d6c-fzbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nayqy1c_r"/><path class="vebkkh5gh"/><path class="fo8dlab0r"/><path class="d6c-fzbcb"/>`,
		"fallback": "solar:rows-4-bold-duotone",
	});
}

export default Component;
