import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sz43oubub.css';
import '../../css/i/iuiyx0bnr.css';
import '../../css/p/pxcylebuj.css';
import '../../css/s/sl7siidbt.css';
import '../../css/z/z4fg99pfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sz43oubub"/><path class="iuiyx0bnr wm-shine"/><path class="pxcylebuj wm-k"/><path class="sl7siidbt wm-a"/><path class="wm-s z4fg99pfy"/></g>`,
		"fallback": "withicons-kawaii:smile-plus",
	});
}

export default Component;
