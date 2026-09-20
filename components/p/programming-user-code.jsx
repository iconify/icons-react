import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl11knbwz.css';
import '../../css/m/m2ikeob3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl11knbwz"/><path class="m2ikeob3b"/>`,
		"fallback": "streamline-freehand:programming-user-code",
	});
}

export default Component;
