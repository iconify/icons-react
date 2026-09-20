import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg3giegrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg3giegrg"/>`,
		"fallback": "uim:polygon",
	});
}

export default Component;
