import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkzkbyboz.css';
import '../../css/b/br5p98b4q.css';
import '../../css/h/hjo-bob9g.css';
import '../../css/o/o36krobqg.css';
import '../../css/m/mt8w238-e.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/zzwwpix8g.css';
import '../../css/n/ncimcywjq.css';
import '../../css/j/jppodacjs.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkzkbyboz"/><path class="br5p98b4q"/><path class="hjo-bob9g"/><path class="o36krobqg"/><circle class="mt8w238-e"/><g class="jn8qy4bru"><path class="zzwwpix8g"/><path class="ncimcywjq"/><circle class="jppodacjs"/></g>`,
		"fallback": "openmoji:ping-pong",
	});
}

export default Component;
