import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rifi0464k.css';
import '../../css/m/mcj9j5eld.css';
import '../../css/h/hzoki0byv.css';
import '../../css/n/nw9qq6s-i.css';
import '../../css/o/o5wyabbqw.css';
import '../../css/a/aq6ortcxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="rifi0464k"/><path class="mcj9j5eld"/><path class="hzoki0byv"/><path class="nw9qq6s-i"/><path class="o5wyabbqw"/><path class="aq6ortcxi"/></g>`,
		"fallback": "icon-park:mirror-two",
	});
}

export default Component;
