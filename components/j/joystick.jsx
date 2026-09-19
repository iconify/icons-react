import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xxtf9bhqn.css';
import '../../css/g/g7z2j-78e.css';
import '../../css/i/iuqbgubxq.css';
import '../../css/c/c1t--rtgz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xxtf9bhqn"/><path class="g7z2j-78e"/><path class="iuqbgubxq"/><path class="c1t--rtgz"/></g>`,
		"fallback": "icon-park-outline:joystick",
	});
}

export default Component;
