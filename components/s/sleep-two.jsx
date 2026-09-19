import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/o/opc6n7x1f.css';
import '../../css/b/ba1ovkaya.css';
import '../../css/f/fsx-yib6n.css';
import '../../css/j/j2yq9cb1n.css';
import '../../css/b/bivxh4swz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="opc6n7x1f"/><path class="ba1ovkaya"/><path class="fsx-yib6n"/><path class="j2yq9cb1n"/><circle class="bivxh4swz"/></g>`,
		"fallback": "icon-park:sleep-two",
	});
}

export default Component;
