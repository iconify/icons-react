import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/f/fzr6uv.css';
import '../../css/z/zxndow.css';
import '../../css/w/wa90th.css';
import '../../css/c/cm1sdh.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-50.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5Fu2cbEb"><path class="c5xdmn fzr6uv zxndow"/><path class="c5xdmn wa90th zxndow"/><path class="c5xdmn cm1sdh oxx-om"/></mask></defs><path mask="url(#SVG5Fu2cbEb)" class="botfzx"/><path class="c5xdmn cm1sdh gd_4-q"/>`,
		"fallback": "line-md:laptop-off",
	});
}

export default Component;
