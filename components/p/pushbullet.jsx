import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmi0dlb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmi0dlb7g"/>`,
		"fallback": "thesvg:pushbullet",
	});
}

export default Component;
