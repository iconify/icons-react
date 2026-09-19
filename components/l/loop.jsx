import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc8hhiglu.css';
import '../../css/e/e_vt-db2k.css';
import '../../css/z/zp9u2wb6f.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sc8hhiglu"/><path class="e_vt-db2k"/><path class="zp9u2wb6f"/>`,
		"fallback": "flat-ui:loop",
	});
}

export default Component;
