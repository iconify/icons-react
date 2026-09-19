import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dtifev8gr.css';
import '../../css/i/izc3rturx.css';
import '../../css/v/vqf8h-68t.css';
import '../../css/k/kqwrzbgpo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="dtifev8gr"/><path class="izc3rturx"/><path class="vqf8h-68t"/><path class="kqwrzbgpo"/></g>`,
		"fallback": "icon-park:sd",
	});
}

export default Component;
