import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmiuys6ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmiuys6ib"/>`,
		"fallback": "thesvg:paperspace",
	});
}

export default Component;
