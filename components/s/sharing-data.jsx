import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/avpgq1kjt.css';
import '../../css/b/bjlqahb4n.css';
import '../../css/t/tsy8wcblq.css';
import '../../css/a/aqt1dxftk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="avpgq1kjt"/><path class="bjlqahb4n"/><path class="tsy8wcblq"/><path class="aqt1dxftk"/></g>`,
		"fallback": "streamline-sharp:sharing-data",
	});
}

export default Component;
