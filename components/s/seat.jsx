import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lrqwqdbew.css';
import '../../css/p/pd5_1mzss.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsd2ModqX"><g class="rohhhzb0l"><path class="lrqwqdbew"/><path class="pd5_1mzss"/><circle class="v_mrg_w2s"/></g></mask></defs><path mask="url(#SVGsd2ModqX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:seat",
	});
}

export default Component;
