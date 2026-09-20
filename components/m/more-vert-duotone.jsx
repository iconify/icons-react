import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tts06v5dt.css';
import '../../css/o/o27tr5bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tts06v5dt"/><path class="o27tr5bta"/></g>`,
		"fallback": "si:more-vert-duotone",
	});
}

export default Component;
