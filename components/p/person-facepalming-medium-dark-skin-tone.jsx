import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdofu6zwt.css';
import '../../css/f/fsc6xcc_g.css';
import '../../css/e/eztqw9biy.css';
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
		"content": `<path class="hdofu6zwt"/><path class="fsc6xcc_g"/><g class="eztqw9biy"><path class="zcjgdjbuo"/><path class="yl2jg2jca"/></g><path class="z9d9urv7x"/><path class="s4b5i6bac"/><path class="opccvkyva"/><path class="v1xr-6b9l"/><path class="qqn3bubni"/>`,
		"fallback": "openmoji:person-facepalming-medium-dark-skin-tone",
	});
}

export default Component;
