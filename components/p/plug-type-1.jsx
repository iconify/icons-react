import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/y/y23revbym.css';
import '../../css/x/xny7ahbyj.css';
import '../../css/h/hg7iuofvt.css';
import '../../css/z/z24xhdb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m4l-9ybuj"/><circle class="y23revbym"/><circle class="xny7ahbyj"/><circle class="hg7iuofvt"/><path class="z24xhdb1f"/></g>`,
		"fallback": "evicons:plug-type-1",
	});
}

export default Component;
