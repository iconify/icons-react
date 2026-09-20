import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/z/z1wsyp.css';
import '../../css/o/oxx-om.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-62.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGoi2mdcdx"><path class="c5xdmn z1wsyp"/><path class="c5xdmn oxx-om t-ne3j"/></mask></defs><path mask="url(#SVGoi2mdcdx)" class="botfzx"/><path class="c5xdmn gd_4-q t-ne3j"/>`,
		"fallback": "line-md:moon-simple-off",
	});
}

export default Component;
