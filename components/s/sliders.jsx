import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drg-ult2l.css';
import '../../css/o/od-bcwuhn.css';
import '../../css/z/z2qezj3es.css';
import '../../css/q/qeewa2xbq.css';
import '../../css/d/dekk8gbpu.css';
import '../../css/w/w5frn37fo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drg-ult2l wm-shadow"/><path class="od-bcwuhn wm-k"/><path class="wm-a z2qezj3es"/><path class="qeewa2xbq wm-a"/><path class="dekk8gbpu wm-a"/><path class="w5frn37fo wm-a"/>`,
		"fallback": "withicons-pastel:sliders",
	});
}

export default Component;
