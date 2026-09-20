import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o2fc5ib8x.css';
import '../../css/j/jb14cqigq.css';
import '../../css/v/vxxo7mb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o2fc5ib8x"/><path class="jb14cqigq"/><path class="vxxo7mb1u"/></g>`,
		"fallback": "streamline-ultimate:shield-check-1",
	});
}

export default Component;
