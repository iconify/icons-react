import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7jdrob8h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zebndbubb.css';
import '../../css/q/q9-8gobaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z7jdrob8h"/><g class="dt0cm9dhy primary"><circle class="zebndbubb"/><path class="q9-8gobaf"/></g>`,
		"fallback": "iconaut:locate-duo",
	});
}

export default Component;
