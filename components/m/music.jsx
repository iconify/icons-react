import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/lykxh_xfl.css';
import '../../css/t/tzlf5tbgi.css';
import '../../css/s/sczcljbtn.css';
import '../../css/c/cclqtm0bg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="lykxh_xfl"/><path class="tzlf5tbgi"/><path class="sczcljbtn"/><path class="cclqtm0bg"/></g>`,
		"fallback": "icon-park:music",
	});
}

export default Component;
