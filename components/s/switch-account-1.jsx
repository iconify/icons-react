import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3mutybsc.css';
import '../../css/v/v1ly1ab1a.css';
import '../../css/p/pf-ypib4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q3mutybsc"/><path class="v1ly1ab1a"/><path class="pf-ypib4f"/></g>`,
		"fallback": "streamline-ultimate:switch-account-1",
	});
}

export default Component;
