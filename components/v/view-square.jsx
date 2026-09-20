import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t8a26skit.css';
import '../../css/n/nfur3zcqu.css';
import '../../css/m/mc8e9zh3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t8a26skit"/><path class="nfur3zcqu"/><path class="mc8e9zh3f"/></g>`,
		"fallback": "streamline-ultimate:view-square",
	});
}

export default Component;
