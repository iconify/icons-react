import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al0zveb0a.css';
import '../../css/a/ayfs0cb5s.css';
import '../../css/j/jy90cd2id.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="al0zveb0a"/><path class="ayfs0cb5s"/><path class="jy90cd2id"/>`,
		"fallback": "fxemoji:newmoonwithface",
	});
}

export default Component;
