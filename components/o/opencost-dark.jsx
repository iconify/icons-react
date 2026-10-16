import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/g/g6g9lbc2o.css';
import '../../css/g/g2eya_bfx.css';
import '../../css/h/hq7hygbua.css';
import '../../css/x/xg9esvbka.css';
import '../../css/j/jydnjchaw.css';

const viewBox = {"width":905,"height":822};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="g6g9lbc2o"/><path class="g2eya_bfx"/><path class="hq7hygbua"/><path class="xg9esvbka"/><path class="jydnjchaw"/></g>`,
		"fallback": "thesvg-color:opencost-dark",
	});
}

export default Component;
