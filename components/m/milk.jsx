import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hpahlmbjd.css';
import '../../css/t/tia20ubhp.css';
import '../../css/h/h900g0bgj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="hpahlmbjd"/><path class="tia20ubhp"/><path class="h900g0bgj"/></g>`,
		"fallback": "icon-park:milk",
	});
}

export default Component;
