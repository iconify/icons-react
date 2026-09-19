import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/djw3_hbes.css';
import '../../css/n/n98ciob7o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJptIlbHs"><g class="rohhhzb0l"><path class="djw3_hbes"/><path class="n98ciob7o"/></g></mask></defs><path mask="url(#SVGJptIlbHs)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:two-dimensional-code-one",
	});
}

export default Component;
