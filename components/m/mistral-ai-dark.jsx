import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7bquwqpi.css';
import '../../css/q/qkxrw7b9o.css';
import '../../css/z/zgu501b7w.css';
import '../../css/i/i5ginn9ff.css';
import '../../css/r/rqvlhza_d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7bquwqpi"/><path class="qkxrw7b9o"/><path class="zgu501b7w"/><path class="i5ginn9ff"/><path class="rqvlhza_d"/>`,
		"fallback": "selfhst:mistral-ai-dark",
	});
}

export default Component;
