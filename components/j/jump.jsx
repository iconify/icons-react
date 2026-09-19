import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/d6abn8_hs.css';
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
		"content": `<defs><mask id="SVGUylMkdVc"><g class="rohhhzb0l"><path class="d6abn8_hs"/><circle class="v_mrg_w2s"/></g></mask></defs><path mask="url(#SVGUylMkdVc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:jump",
	});
}

export default Component;
