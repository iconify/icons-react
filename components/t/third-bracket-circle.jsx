import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gangf8bof.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gangf8bof"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "hugeicons:third-bracket-circle",
	});
}

export default Component;
