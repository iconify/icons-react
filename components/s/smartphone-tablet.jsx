import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyk27hxcx.css';
import '../../css/l/lxvvbdcsj.css';
import '../../css/u/u90_kz3vk.css';
import '../../css/v/vsnq63-xh.css';
import '../../css/v/vzkmoxbec.css';
import '../../css/u/u81171hdw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyk27hxcx"/><path class="lxvvbdcsj"/><path class="u90_kz3vk"/><path class="vsnq63-xh"/><path class="vzkmoxbec"/><circle class="u81171hdw"/>`,
		"fallback": "flat-color-icons:smartphone-tablet",
	});
}

export default Component;
