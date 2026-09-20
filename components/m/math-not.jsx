import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzv92pz5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzv92pz5a"/>`,
		"fallback": "tabler:math-not",
	});
}

export default Component;
