import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db19ynbqi.css';
import '../../css/k/kmo065zza.css';
import '../../css/u/uv20i7b6z.css';
import '../../css/l/lwypf-boe.css';
import '../../css/p/pirwrdbar.css';
import '../../css/o/o8bcbj09y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db19ynbqi"/><path class="kmo065zza"/><path class="uv20i7b6z"/><path class="lwypf-boe"/><path class="pirwrdbar"/><path class="o8bcbj09y"/>`,
		"fallback": "solar:tuning-bold",
	});
}

export default Component;
