import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uymgdabjo.css';
import '../../css/k/k1t3p4t5p.css';
import '../../css/i/inkomlb9u.css';
import '../../css/f/fsip9nbyp.css';
import '../../css/o/op9bcu85a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uymgdabjo"/><path class="k1t3p4t5p"/><path class="inkomlb9u"/><path class="fsip9nbyp"/><path class="op9bcu85a"/>`,
		"fallback": "streamline-emojis:raised-hand-2",
	});
}

export default Component;
