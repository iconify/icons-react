import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ud3z8sbrx.css';
import '../../css/i/i3ibt-pfg.css';
import '../../css/j/j8m16sb0y.css';
import '../../css/w/wwmmck7wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ud3z8sbrx"/><path class="i3ibt-pfg"/><path class="j8m16sb0y"/><path class="wwmmck7wx"/></g>`,
		"fallback": "streamline-ultimate:tripadvisor-logo",
	});
}

export default Component;
