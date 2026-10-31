import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/etqf5iv0q.css';
import '../../css/h/hq4mt9hro.css';
import '../../css/z/za3dt0bho.css';
import '../../css/u/uayejnbpx.css';
import '../../css/k/k-k6k285a.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="etqf5iv0q"/><path class="hq4mt9hro wm-shine"/><path class="wm-k za3dt0bho"/><path class="uayejnbpx wm-a"/><path class="k-k6k285a wm-s"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:video-plus",
	});
}

export default Component;
