import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssj6w-3vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssj6w-3vo"/>`,
		"fallback": "stash:sensitive-solid",
	});
}

export default Component;
