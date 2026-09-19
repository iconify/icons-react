import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kue-qkauh.css';
import '../../css/o/odruu0e2a.css';
import '../../css/e/epiyztb2x.css';
import '../../css/r/rguii63jw.css';
import '../../css/f/f61shx7pk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kue-qkauh"/><path class="odruu0e2a"/><path class="epiyztb2x"/><path class="rguii63jw"/><path class="f61shx7pk"/>`,
		"fallback": "ion:ios-fitness",
	});
}

export default Component;
