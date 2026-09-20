import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv_1knjic.css';
import '../../css/y/yq0zo9bus.css';
import '../../css/e/es3vfqb9k.css';
import '../../css/k/kyr5awbst.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv_1knjic"/><path class="yq0zo9bus"/><path class="es3vfqb9k"/><path class="kyr5awbst"/>`,
		"fallback": "openmoji:police-car-light",
	});
}

export default Component;
