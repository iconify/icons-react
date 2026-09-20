import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g0y4zbb_u.css';
import '../../css/u/ugkxkmifm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g0y4zbb_u"/><path class="ugkxkmifm"/></g>`,
		"fallback": "streamline-sharp-color:non-commercial-dollars-flat",
	});
}

export default Component;
