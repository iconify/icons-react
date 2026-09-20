import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o1yqvdbsu.css';
import '../../css/t/tmb8qfb1t.css';
import '../../css/g/gjjdxf-5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o1yqvdbsu"/><path class="tmb8qfb1t"/><path class="gjjdxf-5f"/></g>`,
		"fallback": "reicon:shop5",
	});
}

export default Component;
