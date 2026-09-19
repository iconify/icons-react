import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/acr0mwb8s.css';
import '../../css/o/olwzdbbel.css';
import '../../css/g/ghy3hrbbw.css';
import '../../css/z/z8s6peivs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="acr0mwb8s"/><path class="olwzdbbel"/><path class="ghy3hrbbw"/><path class="z8s6peivs"/></g>`,
		"fallback": "icon-park:message",
	});
}

export default Component;
