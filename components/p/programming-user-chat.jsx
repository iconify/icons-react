import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mecugdb7z.css';
import '../../css/p/pcy004bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mecugdb7z"/><path class="pcy004bij"/></g>`,
		"fallback": "streamline-ultimate:programming-user-chat",
	});
}

export default Component;
