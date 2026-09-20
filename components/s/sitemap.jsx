import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xv6ljh3wt.css';
import '../../css/c/cmgq-2o2d.css';
import '../../css/m/m_ax2cb4m.css';
import '../../css/v/v4aw2fbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xv6ljh3wt"/><rect class="cmgq-2o2d"/><rect class="m_ax2cb4m"/><rect class="v4aw2fbks"/></g>`,
		"fallback": "reicon:sitemap",
	});
}

export default Component;
