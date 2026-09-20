import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdofu6zwt.css';
import '../../css/h/h_dmkpbzo.css';
import '../../css/h/hq1bfqbrr.css';
import '../../css/z/zcjgdjbuo.css';
import '../../css/y/yl2jg2jca.css';
import '../../css/z/z9d9urv7x.css';
import '../../css/s/s4b5i6bac.css';
import '../../css/o/opccvkyva.css';
import '../../css/v/v1xr-6b9l.css';
import '../../css/q/qqn3bubni.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdofu6zwt"/><path class="h_dmkpbzo"/><g class="hq1bfqbrr"><path class="zcjgdjbuo"/><path class="yl2jg2jca"/></g><path class="z9d9urv7x"/><path class="s4b5i6bac"/><path class="opccvkyva"/><path class="v1xr-6b9l"/><path class="qqn3bubni"/>`,
		"fallback": "openmoji:person-facepalming-light-skin-tone",
	});
}

export default Component;
