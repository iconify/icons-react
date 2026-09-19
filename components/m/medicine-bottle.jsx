import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/cd77q6u4q.css';
import '../../css/f/fzm2rccme.css';
import '../../css/p/p_61p5bej.css';
import '../../css/w/wb1h-68-f.css';
import '../../css/t/t6-8_dbpu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPaaJEb4Z"><g class="rohhhzb0l"><path class="cd77q6u4q"/><path class="fzm2rccme"/><path class="p_61p5bej"/><path class="wb1h-68-f"/><path class="t6-8_dbpu"/></g></mask></defs><path mask="url(#SVGPaaJEb4Z)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:medicine-bottle",
	});
}

export default Component;
