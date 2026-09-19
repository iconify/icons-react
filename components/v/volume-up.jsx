import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/d/da1dlqbrp.css';
import '../../css/g/g247_u5kv.css';
import '../../css/x/xgn-hnbwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="da1dlqbrp"/><path class="g247_u5kv"/><path class="xgn-hnbwi"/></g>`,
		"fallback": "icon-park:volume-up",
	});
}

export default Component;
