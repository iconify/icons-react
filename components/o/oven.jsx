import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xj8lo5bny.css';
import '../../css/q/q4t6juvcg.css';
import '../../css/r/r5dlsx-zb.css';
import '../../css/g/g0m2p90yv.css';
import '../../css/o/o3o-f27dr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMqmXkdPw"><g class="ft5dv1b6b"><rect class="xj8lo5bny"/><rect class="q4t6juvcg"/><circle class="r5dlsx-zb"/><path class="g0m2p90yv"/><path class="o3o-f27dr"/></g></mask></defs><path mask="url(#SVGMqmXkdPw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:oven",
	});
}

export default Component;
