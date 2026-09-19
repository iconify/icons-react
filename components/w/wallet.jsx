import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/jswg7kbdr.css';
import '../../css/u/uwhfkxbzt.css';
import '../../css/w/wc-56lbkw.css';
import '../../css/i/idjw04bqv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkRAeLdJU"><g class="rohhhzb0l"><path clip-rule="evenodd" class="jswg7kbdr"/><path class="uwhfkxbzt"/><path class="wc-56lbkw"/><path class="idjw04bqv"/></g></mask></defs><path mask="url(#SVGkRAeLdJU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:wallet",
	});
}

export default Component;
