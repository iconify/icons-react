import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eyebsfb6f.css';
import '../../css/a/a-7ym1bqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eyebsfb6f"/><path class="a-7ym1bqf"/></g>`,
		"fallback": "streamline-ultimate:messages-people-user-check",
	});
}

export default Component;
