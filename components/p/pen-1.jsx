import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qygoz3cqa.css';
import '../../css/h/hz0arng4r.css';
import '../../css/z/z94y4tnka.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qygoz3cqa"/><path class="hz0arng4r"/><path class="z94y4tnka"/></g>`,
		"fallback": "streamline-flex:pen-1",
	});
}

export default Component;
