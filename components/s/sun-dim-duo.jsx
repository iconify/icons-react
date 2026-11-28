import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6wedk6gg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b4a62x58a.css';
import '../../css/h/h1zbsh5sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z6wedk6gg"/><g class="dt0cm9dhy primary"><path class="b4a62x58a"/><path class="h1zbsh5sl"/></g>`,
		"fallback": "iconaut:sun-dim-duo",
	});
}

export default Component;
