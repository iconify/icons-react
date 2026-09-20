import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w128kj.css';
import '../../css/c/c5xdmn.css';
import '../../css/m/m2hv7f.css';
import '../../css/z/zxndow.css';
import '../../css/x/xf_gao.css';
import '../../css/o/oxx-om.css';
import '../../css/u/ux4wzr.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/d/d-3fqnuo.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3UnvhetV"><path class="w128kj"/><path class="c5xdmn m2hv7f zxndow"/><path class="c5xdmn xf_gao zxndow"/><path class="c5xdmn oxx-om ux4wzr"/></mask></defs><path mask="url(#SVG3UnvhetV)" class="botfzx"/><path class="c5xdmn gd_4-q ux4wzr"/>`,
		"fallback": "line-md:steering-off",
	});
}

export default Component;
