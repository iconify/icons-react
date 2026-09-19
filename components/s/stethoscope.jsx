import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u1qtw7b2b.css';
import '../../css/y/y165n9bjs.css';
import '../../css/q/qqpblxf5z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsiQHC98x"><g class="aql7dnt-u"><path class="u1qtw7b2b"/><path class="y165n9bjs"/><path class="qqpblxf5z"/></g></mask></defs><path mask="url(#SVGsiQHC98x)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:stethoscope",
	});
}

export default Component;
