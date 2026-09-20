import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/v3brqrbzt.css';
import '../../css/y/y5tfrfkbk.css';
import '../../css/h/h2vzftbvs.css';
import '../../css/t/tk9p-_bdg.css';
import '../../css/b/bxooqnwiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="v3brqrbzt"/><path class="y5tfrfkbk"/><path class="h2vzftbvs"/><path class="tk9p-_bdg"/><path class="bxooqnwiw"/></g>`,
		"fallback": "streamline-sharp-color:ship",
	});
}

export default Component;
