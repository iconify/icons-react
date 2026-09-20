import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6b6vpb5x.css';
import '../../css/u/uu-fcqbzw.css';
import '../../css/x/xztz0wb3p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6b6vpb5x"/><path class="uu-fcqbzw"/><path class="xztz0wb3p"/>`,
		"fallback": "selfhst:pastefy-light",
	});
}

export default Component;
