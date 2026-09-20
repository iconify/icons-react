import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl69lcchu.css';
import '../../css/o/otmkmnc4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl69lcchu"/><path class="otmkmnc4d"/>`,
		"fallback": "selfhst:kyoo",
	});
}

export default Component;
