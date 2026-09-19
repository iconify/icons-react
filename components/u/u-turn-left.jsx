import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nhhjpt21o.css';
import '../../css/k/kosv92b2z.css';
import '../../css/x/xxa6fabjs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnfOpU3VF"><g class="rohhhzb0l"><path class="nhhjpt21o"/><path class="kosv92b2z"/><circle class="xxa6fabjs"/></g></mask></defs><path mask="url(#SVGnfOpU3VF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:u-turn-left",
	});
}

export default Component;
