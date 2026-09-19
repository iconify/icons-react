import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r-8dawoyr.css';
import '../../css/l/l5tcc9b-l.css';
import '../../css/y/ya-s0pbbq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKSbZykmm"><g class="rohhhzb0l"><path class="r-8dawoyr"/><path class="l5tcc9b-l"/><path class="ya-s0pbbq"/></g></mask></defs><path mask="url(#SVGKSbZykmm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:one-to-many",
	});
}

export default Component;
