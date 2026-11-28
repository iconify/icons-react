import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iercfls4x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zxmc7xb9t.css';
import '../../css/y/yi37gdbko.css';
import '../../css/s/sqy0bqbaa.css';
import '../../css/q/qjzyurbpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iercfls4x secondary"/><g class="dt0cm9dhy primary"><path class="zxmc7xb9t"/><path class="yi37gdbko"/><path class="sqy0bqbaa"/><path class="qjzyurbpi"/></g>`,
		"fallback": "iconaut:music-off-duo",
	});
}

export default Component;
