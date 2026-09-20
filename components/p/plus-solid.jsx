import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww1mpb9-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww1mpb9-f"/>`,
		"fallback": "stash:plus-solid",
	});
}

export default Component;
