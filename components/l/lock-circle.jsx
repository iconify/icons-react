import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sduudosdv.css';
import '../../css/r/r9i2zkb1g.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sduudosdv"/><path class="r9i2zkb1g"/><path class="p9-zrkb4g"/></g>`,
		"fallback": "reicon:lock-circle",
	});
}

export default Component;
