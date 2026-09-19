import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n9silmbdd.css';
import '../../css/b/b9qj8z5ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n9silmbdd"/><path class="b9qj8z5ts"/></g>`,
		"fallback": "hugeicons:self-transfer",
	});
}

export default Component;
