import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cs7rlcbua.css';
import '../../css/c/czgk2wbar.css';
import '../../css/a/adsih9_uj.css';
import '../../css/q/qog11zbsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(45 14.039 35.97)" class="cs7rlcbua"/><path class="czgk2wbar"/><path class="adsih9_uj"/><path clip-rule="evenodd" class="qog11zbsn"/></g>`,
		"fallback": "streamline-memes:thug-life",
	});
}

export default Component;
