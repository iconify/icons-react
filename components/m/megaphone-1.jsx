import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fj6yl0zvc.css';
import '../../css/i/ihep_obbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="fj6yl0zvc"/><path class="ihep_obbb"/></g>`,
		"fallback": "streamline-cyber:megaphone-1",
	});
}

export default Component;
