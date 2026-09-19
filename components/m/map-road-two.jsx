import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xxbuy0agq.css';
import '../../css/m/m9zi_fbwg.css';
import '../../css/r/rjeel1bkm.css';
import '../../css/k/kaylpt2hq.css';
import '../../css/c/ckaa1qz4k.css';
import '../../css/c/c5v7f1bap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="xxbuy0agq"/><path class="m9zi_fbwg"/><path class="rjeel1bkm"/><path class="kaylpt2hq"/><path class="ckaa1qz4k"/><path class="c5v7f1bap"/></g>`,
		"fallback": "icon-park:map-road-two",
	});
}

export default Component;
