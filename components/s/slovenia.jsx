import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqpgm2b4p.css';
import '../../css/w/wprsklb5k.css';
import '../../css/k/kso7jdowc.css';
import '../../css/j/jkgsd16at.css';
import '../../css/j/jomrzj24o.css';
import '../../css/j/jr3-37t6a.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqpgm2b4p"/><path class="wprsklb5k"/><path class="kso7jdowc"/><path class="jkgsd16at"/><path class="jomrzj24o"/><path class="jr3-37t6a"/>`,
		"fallback": "tabler-flags:slovenia",
	});
}

export default Component;
