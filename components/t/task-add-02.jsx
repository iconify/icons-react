import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a03587bft.css';
import '../../css/u/ucz71y6rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a03587bft"/><path class="ucz71y6rj"/></g>`,
		"fallback": "hugeicons:task-add-02",
	});
}

export default Component;
