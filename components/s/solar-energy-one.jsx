import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l7tgqzbbj.css';
import '../../css/f/fb4plhbwx.css';
import '../../css/r/r7hf6hb9q.css';
import '../../css/d/d6u1tcc9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l7tgqzbbj"/><path class="fb4plhbwx"/><circle class="r7hf6hb9q"/><path class="d6u1tcc9r"/></g>`,
		"fallback": "icon-park-solid:solar-energy-one",
	});
}

export default Component;
