import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/v/vlejyx.css';
import '../../css/j/j85d4e.css';
import '../../css/o/oxx-om.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
import '../../css/d/d-u-uo_p.css';
import '../../css/d/d-5-a1ir.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpIykycDM"><path class="c5xdmn vlejyx"/><path class="j85d4e"/><path class="c5xdmn oxx-om t-ne3j"/></mask></defs><path mask="url(#SVGpIykycDM)" class="botfzx"/><path class="c5xdmn gd_4-q t-ne3j"/>`,
		"fallback": "line-md:volume-medium-off",
	});
}

export default Component;
