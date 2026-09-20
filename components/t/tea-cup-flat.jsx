import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fvtp51txj.css';
import '../../css/w/wqbr57cuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fvtp51txj"/><path class="wqbr57cuc"/></g>`,
		"fallback": "streamline-sharp-color:tea-cup-flat",
	});
}

export default Component;
