import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkgw9db5l.css';
import '../../css/g/gt-02fbkp.css';
import '../../css/q/qprbuwhio.css';
import '../../css/d/di72ap18h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tkgw9db5l"/><path class="gt-02fbkp"/><path class="qprbuwhio"/><path class="di72ap18h"/></g>`,
		"fallback": "streamline-flex-color:ios-ipados",
	});
}

export default Component;
