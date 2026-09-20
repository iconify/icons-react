import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_1xrq.css';
import '../../css/k/k0rqjk.css';
import '../../css/q/q7qpvx.css';
import '../../css/a/ainywl.css';
import '../../css/n/nf43cj.css';
import '../../css/s/sfuyde.css';
import '../../css/o/o3umjd.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-e0pf-z.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-h46djy.css';
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
		"content": `<defs><mask id="SVGFXbOgesC"><path class="g_1xrq k0rqjk q7qpvx"/><path class="ainywl g_1xrq nf43cj sfuyde"/><path class="g_1xrq q7qpvx sfuyde"/><circle class="nf43cj o3umjd"/></mask></defs><path mask="url(#SVGFXbOgesC)" class="botfzx"/>`,
		"fallback": "line-md:map-marker-multiple-alt-filled",
	});
}

export default Component;
