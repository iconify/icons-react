import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/x/x-ms1wbzb.css';
import '../../css/c/ch56ih_vk.css';
import '../../css/n/nt7fptbcj.css';

const viewBox = {"width":395.51,"height":435.76,"left":16.62,"top":-1.63};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="x-ms1wbzb"/><path class="ch56ih_vk"/><path class="nt7fptbcj"/></g>`,
		"fallback": "thesvg-color:open-policy-agent-dark",
	});
}

export default Component;
