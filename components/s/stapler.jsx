import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/fm3ditb9p.css';
import '../../css/t/tmp9efbjl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGq4AOPEzN"><g class="rohhhzb0l"><path class="fm3ditb9p"/><circle class="tmp9efbjl"/></g></mask></defs><path mask="url(#SVGq4AOPEzN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stapler",
	});
}

export default Component;
