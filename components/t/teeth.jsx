import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dxuldfo8u.css';
import '../../css/m/mid7ym57a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2HdZmdqm"><g class="rohhhzb0l"><path clip-rule="evenodd" class="dxuldfo8u"/><path class="mid7ym57a"/></g></mask></defs><path mask="url(#SVG2HdZmdqm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:teeth",
	});
}

export default Component;
