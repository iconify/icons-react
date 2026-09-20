import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v45vzdbvb.css';
import '../../css/k/k9nw0wpfg.css';
import '../../css/d/dfpusmurg.css';

const viewBox = {"width":691,"height":209};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="v45vzdbvb"><path class="k9nw0wpfg"/><path class="dfpusmurg"/></g>`,
		"fallback": "thesvg-color:mulesoft",
	});
}

export default Component;
