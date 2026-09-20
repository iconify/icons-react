import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/l3vjg3yid.css';
import '../../css/q/qks8v3dcy.css';
import '../../css/i/ilj55bibp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="l3vjg3yid"/><path class="qks8v3dcy"/><path class="ilj55bibp"/></g>`,
		"fallback": "streamline-cyber:steve-jobs",
	});
}

export default Component;
