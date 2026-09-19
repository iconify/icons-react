import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo4lcqbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xo4lcqbri"/>`,
		"fallback": "heroicons:phone-x-mark-solid",
	});
}

export default Component;
