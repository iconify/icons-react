import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r-kinobif.css';
import '../../css/q/qrnzx23eu.css';
import '../../css/l/ltp3o44gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r-kinobif"/><path class="qrnzx23eu"/><path class="ltp3o44gf"/></g>`,
		"fallback": "reicon:tasks",
	});
}

export default Component;
