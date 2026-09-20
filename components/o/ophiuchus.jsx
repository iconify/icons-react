import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dne0f28rx.css';
import '../../css/h/h749acble.css';
import '../../css/t/tlg-pta9y.css';
import '../../css/v/vo71evf5d.css';
import '../../css/i/ib1pvlupc.css';
import '../../css/j/jeihybbgn.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dne0f28rx"><path class="h749acble"/><path class="tlg-pta9y"/></g><path class="vo71evf5d"/><path class="ib1pvlupc"/><path class="jeihybbgn"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:ophiuchus",
	});
}

export default Component;
