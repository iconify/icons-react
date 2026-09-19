import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qz06jbkqv.css';
import '../../css/b/b4qpfgbcg.css';
import '../../css/q/q0fvvybgc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUyQBvdTQ"><g class="wwvp95byt"><path class="qz06jbkqv"/><path class="b4qpfgbcg"/><path class="q0fvvybgc"/></g></mask></defs><path mask="url(#SVGUyQBvdTQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:map-draw",
	});
}

export default Component;
