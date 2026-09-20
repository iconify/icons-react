import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvz8bmbev.css';
import '../../css/d/dvmkg2bvp.css';
import '../../css/z/zemfc1i9l.css';
import '../../css/s/sa-6twkud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvz8bmbev"/><path class="dvmkg2bvp"/><path class="zemfc1i9l"/><path class="sa-6twkud"/>`,
		"fallback": "selfhst:timeful-light",
	});
}

export default Component;
