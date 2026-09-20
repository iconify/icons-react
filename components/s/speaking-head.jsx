import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd9c8clmb.css';
import '../../css/m/mlljs5b8w.css';
import '../../css/z/zew23veae.css';
import '../../css/a/a-gf5y89p.css';
import '../../css/d/d8s3b-zbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd9c8clmb"/><path class="mlljs5b8w"/><path class="zew23veae"/><path class="a-gf5y89p"/><path class="d8s3b-zbx"/>`,
		"fallback": "streamline-emojis:speaking-head",
	});
}

export default Component;
