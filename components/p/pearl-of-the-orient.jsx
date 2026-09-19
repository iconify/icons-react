import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/agef183bz.css';
import '../../css/b/bhm_s360t.css';
import '../../css/i/izz9u2a6d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGCBLlyfqy"><g class="rohhhzb0l"><circle class="agef183bz"/><circle class="bhm_s360t"/><path class="izz9u2a6d"/></g></mask></defs><path mask="url(#SVGCBLlyfqy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:pearl-of-the-orient",
	});
}

export default Component;
