import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/j/jzp86izib.css';
import '../../css/d/d52l-tb8w.css';
import '../../css/f/fbcpkibjw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGChwPkd1R"><g class="rohhhzb0l"><path clip-rule="evenodd" class="jzp86izib"/><path class="d52l-tb8w"/><path class="fbcpkibjw"/></g></mask></defs><path mask="url(#SVGChwPkd1R)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:prescription",
	});
}

export default Component;
