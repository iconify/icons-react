import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eab0y1u-b.css';
import '../../css/d/daaedus6x.css';
import '../../css/a/a8vq56b-f.css';
import '../../css/q/qfnoa7bmf.css';
import '../../css/q/q85_wabhj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eab0y1u-b"/><path class="daaedus6x"/><path class="a8vq56b-f"/><path class="qfnoa7bmf"/><path class="q85_wabhj"/>`,
		"fallback": "energy-icons:key-handover-20-bold",
	});
}

export default Component;
