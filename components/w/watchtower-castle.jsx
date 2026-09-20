import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/janzo88gl.css';
import '../../css/h/hc3f2obki.css';
import '../../css/u/uhd7hfh2i.css';
import '../../css/u/uwq9zwb5l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="janzo88gl"/><path class="hc3f2obki"/><path class="uhd7hfh2i"/><path class="uwq9zwb5l"/></g>`,
		"fallback": "streamline-flex-color:watchtower-castle",
	});
}

export default Component;
