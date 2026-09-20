import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiefihbpi.css';
import '../../css/d/daoycporf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiefihbpi"/><path class="daoycporf"/>`,
		"fallback": "streamline-ultimate:office-clipper-bold",
	});
}

export default Component;
