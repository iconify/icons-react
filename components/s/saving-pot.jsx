import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6zqz9boz.css';
import '../../css/v/v938tnbhr.css';
import '../../css/h/hlf86pbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6zqz9boz"/><path class="v938tnbhr"/><path class="hlf86pbji"/></g>`,
		"fallback": "tdesign:saving-pot",
	});
}

export default Component;
