import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/q/qvppgx.css';
import '../../css/c/cmsyud.css';
import '../../css/i/izvovy.css';
import '../../css/s/s8e22g.css';
import '../../css/b/botfzx.css';
import '../../css/t/t_zpns.css';
import '../../css/t/t0wiei.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-from-22.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGotdKseNX"><path class="c5xdmn qvppgx"/><path class="cmsyud"/></mask></defs><path class="c5xdmn izvovy s8e22g"/><path mask="url(#SVGotdKseNX)" class="botfzx"/><path class="c5xdmn s8e22g t_zpns"/><path class="c5xdmn s8e22g t0wiei"/>`,
		"fallback": "line-md:person-search",
	});
}

export default Component;
