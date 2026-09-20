import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5qmmgbfo.css';
import '../../css/p/p-r-fqbmz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5qmmgbfo"/><path class="p-r-fqbmz"/>`,
		"fallback": "selfhst:microsoft-word-2000",
	});
}

export default Component;
