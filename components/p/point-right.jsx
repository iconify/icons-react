import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r9dhqacfo.css';
import '../../css/q/qy56o9fty.css';
import '../../css/b/bbvdnfrhh.css';
import '../../css/e/etewfjb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r9dhqacfo"/><path class="qy56o9fty"/><path class="bbvdnfrhh"/><path class="etewfjb3l"/></g>`,
		"fallback": "iconaut:point-right",
	});
}

export default Component;
