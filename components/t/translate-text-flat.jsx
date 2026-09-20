import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sg3-nxoqp.css';
import '../../css/g/ga2aiib7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sg3-nxoqp"/><path class="ga2aiib7r"/></g>`,
		"fallback": "streamline-sharp-color:translate-text-flat",
	});
}

export default Component;
