import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsgb84bvf.css';
import '../../css/q/q1sggqbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsgb84bvf"/><path clip-rule="evenodd" class="q1sggqbkg"/>`,
		"fallback": "solar:restart-circle-outline",
	});
}

export default Component;
