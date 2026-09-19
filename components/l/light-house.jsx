import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/k/kw7_76byl.css';
import '../../css/d/dmcrl2h0s.css';
import '../../css/e/enty5jbik.css';
import '../../css/o/owajxdbfo.css';
import '../../css/d/dkfjrabff.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4oWdcbZQ"><g class="v3_i3wktz"><path class="kw7_76byl"/><path class="dmcrl2h0s"/><path class="enty5jbik"/><path class="owajxdbfo"/><path class="dkfjrabff"/></g></mask></defs><path mask="url(#SVG4oWdcbZQ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:light-house",
	});
}

export default Component;
