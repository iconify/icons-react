import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zfuptwb7a.css';
import '../../css/s/sui1ldz4f.css';
import '../../css/y/yxxwgrb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zfuptwb7a"/><path class="sui1ldz4f"/><path class="yxxwgrb-b"/></g>`,
		"fallback": "reicon:programming-arrows",
	});
}

export default Component;
