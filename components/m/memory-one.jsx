import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr5zj1bhs.css';
import '../../css/g/gb1htzy0l.css';
import '../../css/c/clbakmlmn.css';
import '../../css/n/n663wfmmj.css';
import '../../css/l/l6ycl0g3o.css';
import '../../css/x/x65adjbvt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGlP1sd1H"><g class="ft5dv1b6b"><path class="gr5zj1bhs"/><rect class="gb1htzy0l"/><rect class="clbakmlmn"/><rect class="n663wfmmj"/><rect class="l6ycl0g3o"/><path class="x65adjbvt"/></g></mask></defs><path mask="url(#SVGGlP1sd1H)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:memory-one",
	});
}

export default Component;
