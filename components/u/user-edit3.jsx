import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fgm_w0bnd.css';
import '../../css/r/ruoobvlrj.css';
import '../../css/p/p552hfbgz.css';
import '../../css/l/lw_yxzo-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fgm_w0bnd"/><path class="ruoobvlrj"/><path class="p552hfbgz"/><path class="lw_yxzo-w"/></g>`,
		"fallback": "reicon:user-edit3",
	});
}

export default Component;
