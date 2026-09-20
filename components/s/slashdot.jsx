import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw9em7lpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw9em7lpg"/>`,
		"fallback": "thesvg-color:slashdot",
	});
}

export default Component;
