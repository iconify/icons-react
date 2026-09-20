import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2av1kbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2av1kbms"/>`,
		"fallback": "thesvg:semantic-ui-react",
	});
}

export default Component;
