import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/v/v2j03q.css';
import '../../css/d/dr_qeu.css';
import '../../css/u/u_6lhy.css';
import '../../css/h/h2n28i.css';
import '../../css/c/cm1sdh.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-52.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0iYqAdgV"><path class="c5xdmn v2j03q"/><circle class="dr_qeu u_6lhy"/><circle class="dr_qeu h2n28i"/><path class="c5xdmn cm1sdh oxx-om"/></mask></defs><path mask="url(#SVG0iYqAdgV)" class="botfzx"/><path class="c5xdmn cm1sdh gd_4-q"/>`,
		"fallback": "line-md:pizza-off",
	});
}

export default Component;
