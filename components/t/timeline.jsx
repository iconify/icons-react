import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jegd8ybqs.css';
import '../../css/h/hrxogvq4w.css';
import '../../css/h/hayvu4isb.css';
import '../../css/b/bwxghiblf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jegd8ybqs"/><path class="hrxogvq4w"/><path class="hayvu4isb"/><path class="bwxghiblf"/></g>`,
		"fallback": "icon-park-solid:timeline",
	});
}

export default Component;
