import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r-d5io9bn.css';
import '../../css/g/gg1lczq6x.css';
import '../../css/h/h5kmtlbhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="r-d5io9bn"/><path class="gg1lczq6x"/><path class="h5kmtlbhf"/></g>`,
		"fallback": "icon-park:umbrella",
	});
}

export default Component;
