import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6hwvs4-a.css';
import '../../css/h/heccpqbex.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6hwvs4-a"/><path class="heccpqbex"/>`,
		"fallback": "selfhst:swing-music",
	});
}

export default Component;
