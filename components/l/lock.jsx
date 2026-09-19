import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vigrlfbps.css';
import '../../css/z/zfukoz0sr.css';
import '../../css/t/ty52ykbzz.css';
import '../../css/v/vqhaxew3u.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vigrlfbps"/><path class="zfukoz0sr"/><circle class="ty52ykbzz"/><path class="vqhaxew3u"/>`,
		"fallback": "ei:lock",
	});
}

export default Component;
