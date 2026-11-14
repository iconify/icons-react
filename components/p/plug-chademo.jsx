import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/k/kggx_phcw.css';
import '../../css/o/ok5s3mbwt.css';
import '../../css/y/yczpdobla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m4l-9ybuj"/><circle class="kggx_phcw"/><circle class="ok5s3mbwt"/><path class="yczpdobla"/></g>`,
		"fallback": "evicons:plug-chademo",
	});
}

export default Component;
