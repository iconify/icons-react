import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/s/stjoksb_i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG8So36clL"><g class="rohhhzb0l"><circle class="v_mrg_w2s"/><path class="stjoksb_i"/></g></mask></defs><path mask="url(#SVG8So36clL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sporting",
	});
}

export default Component;
