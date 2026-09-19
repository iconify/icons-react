import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc6jqwb5o.css';
import '../../css/s/sdwkc8bim.css';
import '../../css/m/mc_00bbvz.css';
import '../../css/d/d__c5-_bb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qc6jqwb5o"/><path class="sdwkc8bim"/><path clip-rule="evenodd" class="mc_00bbvz"/><path class="d__c5-_bb"/></g>`,
		"fallback": "glyphs:signature-outline",
	});
}

export default Component;
