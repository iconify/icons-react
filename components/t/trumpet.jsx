import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/z2kxsp8bg.css';
import '../../css/b/bd13yxb1u.css';
import '../../css/e/eyowyccos.css';
import '../../css/s/s4vv8pw8c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPTU0vd3E"><g class="rohhhzb0l"><path class="z2kxsp8bg"/><path class="bd13yxb1u"/><path class="eyowyccos"/><path class="s4vv8pw8c"/></g></mask></defs><path mask="url(#SVGPTU0vd3E)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:trumpet",
	});
}

export default Component;
