import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ui9rp7bdv.css';
import '../../css/r/r2th9g7qg.css';
import '../../css/j/jjctiwk9l.css';
import '../../css/q/q-v86wb0v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ui9rp7bdv"/><path class="r2th9g7qg"/><path class="jjctiwk9l"/><path class="q-v86wb0v"/></g>`,
		"fallback": "streamline:smiley-nauseas",
	});
}

export default Component;
