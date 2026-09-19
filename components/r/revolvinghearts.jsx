import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aob6fmi_e.css';
import '../../css/n/n71_44j2k.css';
import '../../css/w/w9orhbbyr.css';
import '../../css/q/qiefsmlyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aob6fmi_e"/><path class="n71_44j2k"/><path class="w9orhbbyr"/><path class="qiefsmlyr"/>`,
		"fallback": "fxemoji:revolvinghearts",
	});
}

export default Component;
