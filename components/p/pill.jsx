import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luulaebmy.css';
import '../../css/a/a7mffllux.css';
import '../../css/f/fk2bfybvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luulaebmy"/><path class="a7mffllux"/><path class="fk2bfybvu"/>`,
		"fallback": "fxemoji:pill",
	});
}

export default Component;
