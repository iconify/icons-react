import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wbtbukbtl.css';
import '../../css/p/py2nz6bgy.css';
import '../../css/t/ty5xaz-3w.css';
import '../../css/r/ri95t2bog.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="wbtbukbtl"/><path class="py2nz6bgy"/><path class="ty5xaz-3w"/><path class="ri95t2bog"/></g>`,
		"fallback": "icon-park:video-conference",
	});
}

export default Component;
