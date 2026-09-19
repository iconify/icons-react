import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/bdr4wv3bp.css';
import '../../css/p/p64iu1blt.css';
import '../../css/c/ck0qv6bfm.css';
import '../../css/t/th5tstbfr.css';
import '../../css/r/r4q61bcud.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZmRzmdso"><g class="s9cl3zbei"><rect class="bdr4wv3bp"/><path class="p64iu1blt"/><path class="ck0qv6bfm"/><circle class="th5tstbfr"/><path class="r4q61bcud"/></g></mask></defs><path mask="url(#SVGZmRzmdso)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:medication-time",
	});
}

export default Component;
