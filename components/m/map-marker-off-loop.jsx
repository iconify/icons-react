import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/s/sgewga.css';
import '../../css/f/f1b6aw.css';
import '../../css/o/oxx-om.css';
import '../../css/t/tbv09e.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-48.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpYN8ke7O"><path class="c5xdmn sgewga"/><circle class="f1b6aw"/><path class="c5xdmn oxx-om tbv09e"/></mask></defs><path mask="url(#SVGpYN8ke7O)" class="botfzx"/><path class="c5xdmn gd_4-q tbv09e"/>`,
		"fallback": "line-md:map-marker-off-loop",
	});
}

export default Component;
