import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfh6k-b6z.css';
import '../../css/t/t0tp8r25e.css';
import '../../css/y/y23y2_vlw.css';
import '../../css/n/nin82pzcn.css';
import '../../css/o/o5_n4ybok.css';
import '../../css/t/t4sxrgblc.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hfh6k-b6z"/><path class="t0tp8r25e"/><path clip-rule="evenodd" class="y23y2_vlw"/><path clip-rule="evenodd" class="nin82pzcn"/><path clip-rule="evenodd" class="o5_n4ybok"/><path clip-rule="evenodd" class="t4sxrgblc"/>`,
		"fallback": "flat-ui:settings",
	});
}

export default Component;
