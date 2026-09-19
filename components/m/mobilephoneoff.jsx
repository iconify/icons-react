import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa7jezu9i.css';
import '../../css/h/hn7rx0huz.css';
import '../../css/c/cej6nwvoo.css';
import '../../css/i/imwzp6bqv.css';
import '../../css/o/orn5ob8sm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa7jezu9i"/><path class="hn7rx0huz"/><path class="cej6nwvoo"/><path class="imwzp6bqv"/><path class="orn5ob8sm"/>`,
		"fallback": "fxemoji:mobilephoneoff",
	});
}

export default Component;
