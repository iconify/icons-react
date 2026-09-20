import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq7w7gbnw.css';
import '../../css/d/dm_tx1bzi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq7w7gbnw"/><path class="dm_tx1bzi"/>`,
		"fallback": "selfhst:logseq",
	});
}

export default Component;
