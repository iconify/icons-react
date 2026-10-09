import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i24lvpsxg.css';
import '../../css/k/kv_lf4f7r.css';
import '../../css/x/xmfmqwpbn.css';
import '../../css/i/iwgm76bjf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i24lvpsxg"/><path class="kv_lf4f7r"/><path class="xmfmqwpbn"/><path class="iwgm76bjf"/>`,
		"fallback": "energy-icons:mic-off-20-bold",
	});
}

export default Component;
