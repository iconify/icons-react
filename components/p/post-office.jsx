import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-_tmzbni.css';
import '../../css/i/ih1cs4bvu.css';
import '../../css/f/f643jy5nb.css';
import '../../css/c/cuw244iup.css';
import '../../css/h/hma6zu_oa.css';
import '../../css/h/hivod7lsk.css';
import '../../css/r/r1m7ullih.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-_tmzbni"/><path class="ih1cs4bvu"/><path class="f643jy5nb"/><path class="cuw244iup"/><path class="hma6zu_oa"/><path class="hivod7lsk"/><path class="r1m7ullih"/></g>`,
		"fallback": "fluent-emoji-flat:post-office",
	});
}

export default Component;
