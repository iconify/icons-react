import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ae6kt2slg.css';
import '../../css/a/aubpohwha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ae6kt2slg"/><path class="aubpohwha"/></g>`,
		"fallback": "hugeicons:scan-image",
	});
}

export default Component;
