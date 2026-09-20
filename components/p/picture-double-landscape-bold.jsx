import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx9ddnbmg.css';
import '../../css/j/jq8l55ojp.css';
import '../../css/r/r6q3ycj7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx9ddnbmg"/><path class="jq8l55ojp"/><path class="r6q3ycj7l"/>`,
		"fallback": "streamline-ultimate:picture-double-landscape-bold",
	});
}

export default Component;
