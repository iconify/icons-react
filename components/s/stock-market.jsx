import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/yza3dybtj.css';
import '../../css/y/ys0e5511v.css';
import '../../css/h/hvk5knb1j.css';
import '../../css/f/f4_3tlbgg.css';
import '../../css/c/chaa-fb7v.css';
import '../../css/d/d0ynmably.css';
import '../../css/g/ggwg8ybly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="yza3dybtj"/><rect class="ys0e5511v"/><path class="hvk5knb1j"/><rect class="f4_3tlbgg"/><path class="chaa-fb7v"/><path class="d0ynmably"/><path class="ggwg8ybly"/></g>`,
		"fallback": "icon-park:stock-market",
	});
}

export default Component;
