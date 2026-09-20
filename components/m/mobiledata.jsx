import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzxw6cc8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzxw6cc8g"/>`,
		"fallback": "tabler:mobiledata",
	});
}

export default Component;
