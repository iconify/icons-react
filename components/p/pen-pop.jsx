import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/z/z627u3b-c.css';
import '../../css/b/blbhasgtz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="z627u3b-c"/><path class="blbhasgtz"/></g>`,
		"fallback": "streamline-kameleon-color:pen-pop",
	});
}

export default Component;
