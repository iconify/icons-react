import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/e/eh2v6kbfv.css';
import '../../css/d/d4q7b5bpo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="eh2v6kbfv"/><path class="d4q7b5bpo"/></g>`,
		"fallback": "streamline-kameleon-color:movie-film-pop",
	});
}

export default Component;
