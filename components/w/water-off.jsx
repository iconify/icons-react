import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/o/of3gku.css';
import '../../css/o/oxx-om.css';
import '../../css/q/qaqxso.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcMlHtdME"><path class="c5xdmn of3gku"/><path class="c5xdmn oxx-om qaqxso"/></mask></defs><path mask="url(#SVGcMlHtdME)" class="botfzx"/><path class="c5xdmn gd_4-q qaqxso"/>`,
		"fallback": "line-md:water-off",
	});
}

export default Component;
