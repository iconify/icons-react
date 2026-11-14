import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/z/znb5wjb1l.css';
import '../../css/b/bxw8ohblp.css';
import '../../css/m/mdvyr0s8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="znb5wjb1l"/><circle class="bxw8ohblp"/><circle class="mdvyr0s8q"/></g>`,
		"fallback": "codex:percent",
	});
}

export default Component;
