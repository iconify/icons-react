import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vaxgtcc0l.css';
import '../../css/n/nm-wo0bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="vaxgtcc0l"/><path class="nm-wo0bie"/></g>`,
		"fallback": "proicons:phone",
	});
}

export default Component;
