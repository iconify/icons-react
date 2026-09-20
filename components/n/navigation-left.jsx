import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/t/tsi88lbcp.css';
import '../../css/r/rxg13ybiv.css';
import '../../css/n/no-r5g2os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="tsi88lbcp"/><path class="rxg13ybiv"/><path class="no-r5g2os"/></g>`,
		"fallback": "streamline-cyber:navigation-left",
	});
}

export default Component;
