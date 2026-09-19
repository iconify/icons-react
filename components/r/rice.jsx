import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kw1qre5us.css';
import '../../css/p/pmpu9x01a.css';
import '../../css/a/arwk8rbqu.css';
import '../../css/i/i55dhw7ek.css';
import '../../css/f/f9u3ckb7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="kw1qre5us"/><path class="pmpu9x01a"/><path class="arwk8rbqu"/><path class="i55dhw7ek"/><path class="f9u3ckb7b"/></g>`,
		"fallback": "icon-park-solid:rice",
	});
}

export default Component;
