import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsny7o2lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsny7o2lw"/>`,
		"fallback": "thesvg-color:semantic-ui",
	});
}

export default Component;
