import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/d_-x11bji.css';
import '../../css/t/tnn9fxbxj.css';
import '../../css/u/uc-xurbtg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3o71FeHR"><g class="rohhhzb0l"><path class="d_-x11bji"/><path class="tnn9fxbxj"/><circle transform="rotate(-180 12 10)" class="uc-xurbtg"/></g></mask></defs><path mask="url(#SVG3o71FeHR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:s-turn-left",
	});
}

export default Component;
