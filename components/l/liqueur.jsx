import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/l/lf1jqulvz.css';
import '../../css/b/bjs1snb0u.css';
import '../../css/g/g92hyzclq.css';
import '../../css/h/h2x_h3b3t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkcF3kcNk"><g class="hv130ab-t"><path class="lf1jqulvz"/><path class="bjs1snb0u"/><path class="g92hyzclq"/><path class="h2x_h3b3t"/></g></mask></defs><path mask="url(#SVGkcF3kcNk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:liqueur",
	});
}

export default Component;
