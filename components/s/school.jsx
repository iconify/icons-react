import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/rb6t6wb7d.css';
import '../../css/h/hkw5s0b0y.css';
import '../../css/t/tb7h92xrz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgREXvdsR"><g class="rohhhzb0l"><path class="rb6t6wb7d"/><path class="hkw5s0b0y"/><path class="tb7h92xrz"/></g></mask></defs><path mask="url(#SVGgREXvdsR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:school",
	});
}

export default Component;
