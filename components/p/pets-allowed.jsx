import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/a/ay62w7b1g.css';
import '../../css/y/yo_9pkbyv.css';
import '../../css/l/lcb3-wbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ay62w7b1g"/><path class="yo_9pkbyv"/><path class="lcb3-wbbs"/></g>`,
		"fallback": "streamline-sharp-color:pets-allowed",
	});
}

export default Component;
