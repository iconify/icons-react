import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oa_z615av.css';
import '../../css/v/vjh719bwy.css';
import '../../css/r/r-pqz712x.css';
import '../../css/z/zvmd8r99d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oa_z615av"/><path class="vjh719bwy"/><path class="r-pqz712x"/><path class="zvmd8r99d"/></g>`,
		"fallback": "streamline-cyber-color:paint-bucket-1",
	});
}

export default Component;
