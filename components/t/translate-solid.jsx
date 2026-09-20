import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj_82edkf.css';
import '../../css/b/b6u88sbza.css';
import '../../css/v/vy16ljbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj_82edkf"/><path class="b6u88sbza"/><path class="vy16ljbzh"/>`,
		"fallback": "pixel:translate-solid",
	});
}

export default Component;
