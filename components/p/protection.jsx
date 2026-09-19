import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/cyzfzpb2f.css';
import '../../css/x/xx16e09lg.css';
import '../../css/u/urcvvqb_d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5NbOwWUE"><g class="rohhhzb0l"><path class="cyzfzpb2f"/><path class="xx16e09lg"/><path class="urcvvqb_d"/></g></mask></defs><path mask="url(#SVG5NbOwWUE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:protection",
	});
}

export default Component;
