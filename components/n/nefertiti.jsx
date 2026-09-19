import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt6hk3bjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt6hk3bjl"/>`,
		"fallback": "game-icons:nefertiti",
	});
}

export default Component;
