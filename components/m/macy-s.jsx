import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdm5t7wmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdm5t7wmg"/>`,
		"fallback": "thesvg:macy-s",
	});
}

export default Component;
