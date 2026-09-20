import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/u/u_-cpk.css';
import '../../css/u/u517wa.css';
import '../../css/l/lwtq5s.css';
import '../../css/t/tcge7x.css';
import '../../css/b/botfzx.css';
import '../../css/r/r5412d.css';
import '../../css/d/d-45nhxp.css';
import '../../css/r/r-from-0px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7WYxB4Io"><path class="c5xdmn u_-cpk"/><circle class="u517wa"/><path class="c5xdmn lwtq5s tcge7x"/></mask></defs><path mask="url(#SVG7WYxB4Io)" class="botfzx"/><path class="c5xdmn r5412d tcge7x"/>`,
		"fallback": "line-md:watch-off",
	});
}

export default Component;
