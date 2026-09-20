import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rvymobzlx.css';
import '../../css/u/uvr9wacnf.css';
import '../../css/d/dsxqhugbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rvymobzlx"/><path class="uvr9wacnf"/><path class="dsxqhugbn"/></g>`,
		"fallback": "reicon:key-square8",
	});
}

export default Component;
