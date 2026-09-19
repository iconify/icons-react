import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6q2q6bbg.css';
import '../../css/u/ut_zgf51k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6q2q6bbg"/><path class="ut_zgf51k"/>`,
		"fallback": "bitcoin-icons:volume-max-filled",
	});
}

export default Component;
