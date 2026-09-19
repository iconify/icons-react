import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il9th5ojt.css';
import '../../css/r/rugwk7w_z.css';
import '../../css/d/dxowqhmnt.css';
import '../../css/o/ock1fkssf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="il9th5ojt"/><path class="rugwk7w_z"/><path class="dxowqhmnt"/><path class="ock1fkssf"/></g>`,
		"fallback": "fluent-emoji-flat:skunk",
	});
}

export default Component;
