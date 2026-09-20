import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hzq80o3qy.css';
import '../../css/r/r97-bnbcb.css';
import '../../css/z/zfyjy16gh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hzq80o3qy"/><path class="r97-bnbcb"/><path class="zfyjy16gh"/></g>`,
		"fallback": "streamline-flex-color:phone-shield-flat",
	});
}

export default Component;
