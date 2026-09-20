import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/slrtq_bwu.css';
import '../../css/y/yvo8g2ena.css';
import '../../css/i/i_mt8hb3h.css';
import '../../css/y/ytyk_-blx.css';
import '../../css/x/xfv2nibzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="slrtq_bwu"/><path class="yvo8g2ena"/><path class="i_mt8hb3h"/><path class="ytyk_-blx"/><path class="xfv2nibzq"/></g>`,
		"fallback": "streamline-freehand-color:share-radar",
	});
}

export default Component;
