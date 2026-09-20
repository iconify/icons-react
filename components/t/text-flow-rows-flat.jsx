import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xs8caqbzg.css';
import '../../css/r/rhdf9ubvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xs8caqbzg"/><path class="rhdf9ubvy"/></g>`,
		"fallback": "streamline-sharp-color:text-flow-rows-flat",
	});
}

export default Component;
