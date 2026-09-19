import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/q/q9_aebbll.css';
import '../../css/c/cty94jb5v.css';
import '../../css/n/ndgf8g0be.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXyGvNb4j"><g class="rohhhzb0l"><path class="q9_aebbll"/><circle transform="rotate(-90 13 8.944)" class="cty94jb5v"/><path class="ndgf8g0be"/></g></mask></defs><path mask="url(#SVGXyGvNb4j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:split-turn-down-right",
	});
}

export default Component;
