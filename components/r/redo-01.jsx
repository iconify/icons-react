import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qmug3jb3z.css';
import '../../css/p/pw-yybc7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qmug3jb3z"/><path class="pw-yybc7u"/></g>`,
		"fallback": "hugeicons:redo-01",
	});
}

export default Component;
