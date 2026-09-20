import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1xrq.css';
import '../../css/p/pwvajr.css';
import '../../css/q/q7qpvx.css';
import '../../css/a/ainywl.css';
import '../../css/n/nf43cj.css';
import '../../css/p/pd3r2w.css';
import '../../css/l/lprv6a.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-48.css';
import '../../css/t/tr-7ecuqx.css';
import '../../css/f/fill-to-1.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2_5px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGcBqBQesk"><path class="g_1xrq pwvajr q7qpvx"/><path class="ainywl g_1xrq nf43cj pd3r2w"/><path class="g_1xrq pd3r2w q7qpvx"/><circle class="lprv6a nf43cj"/></mask></defs><path mask="url(#SVGcBqBQesk)" class="botfzx"/>`,
		"fallback": "line-md:map-marker-multiple-filled-loop",
	});
}

export default Component;
