import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xkpkzmbva.css';
import '../../css/g/gu930pb7q.css';
import '../../css/e/euvnksixb.css';
import '../../css/v/vx_f-t51f.css';
import '../../css/x/xmqcpbcif.css';
import '../../css/l/ll48iosqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow xkpkzmbva"/><path class="gu930pb7q"/><path class="euvnksixb"/><path class="vx_f-t51f"/><path class="wm-shine xmqcpbcif"/><path class="ll48iosqq wm-deco"/></g>`,
		"fallback": "withicons-sticker:octagon-x",
	});
}

export default Component;
