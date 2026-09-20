import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6se-3btu.css';
import '../../css/c/ci8kzdumq.css';
import '../../css/g/glilp5dof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6se-3btu"/><path class="ci8kzdumq"/><path clip-rule="evenodd" class="glilp5dof"/></g>`,
		"fallback": "streamline-sharp-color:safe-vault-flat",
	});
}

export default Component;
