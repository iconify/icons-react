import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg21660si.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg21660si"/>`,
		"fallback": "game-icons:oil-rig",
	});
}

export default Component;
