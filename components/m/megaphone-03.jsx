import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g48hhtbxz.css';
import '../../css/t/t2hcxfbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g48hhtbxz"/><path class="t2hcxfbzw"/></g>`,
		"fallback": "hugeicons:megaphone-03",
	});
}

export default Component;
