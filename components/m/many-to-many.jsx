import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/j/jy1imkqad.css';
import '../../css/j/jmr6mcefv.css';
import '../../css/t/tusq8sbym.css';
import '../../css/l/l9ul_bcga.css';
import '../../css/t/tgiuuc7fp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="jy1imkqad"/><path class="jmr6mcefv"/><path class="tusq8sbym"/><path class="l9ul_bcga"/><path class="tgiuuc7fp"/></g>`,
		"fallback": "icon-park:many-to-many",
	});
}

export default Component;
