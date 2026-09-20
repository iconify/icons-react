import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp-zmabdk.css';
import '../../css/r/rrklbmuzh.css';
import '../../css/z/zem9k1eun.css';
import '../../css/t/tjho2_-dd.css';
import '../../css/m/mebo6qfse.css';
import '../../css/k/kmsf33cda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp-zmabdk"/><path class="rrklbmuzh"/><path class="zem9k1eun"/><path class="tjho2_-dd"/><path class="mebo6qfse"/><path class="kmsf33cda"/>`,
		"fallback": "selfhst:kitsu-light",
	});
}

export default Component;
