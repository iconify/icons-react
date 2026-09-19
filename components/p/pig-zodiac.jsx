import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/n/nwcml8bvw.css';
import '../../css/q/qya8d8bbv.css';
import '../../css/c/cms8k8b5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="nwcml8bvw"/><path class="qya8d8bbv"/><path class="cms8k8b5p"/></g>`,
		"fallback": "icon-park-outline:pig-zodiac",
	});
}

export default Component;
