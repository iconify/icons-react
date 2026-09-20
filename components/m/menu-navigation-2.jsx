import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1sveoo-n.css';
import '../../css/e/eqoj_abpk.css';
import '../../css/r/r7kgrqbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1sveoo-n"/><path class="eqoj_abpk"/><path class="r7kgrqbog"/>`,
		"fallback": "streamline-freehand:menu-navigation-2",
	});
}

export default Component;
