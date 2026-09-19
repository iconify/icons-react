import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/o/o0dwf0b9x.css';
import '../../css/q/qws4jdbvi.css';
import '../../css/p/p19h3jw5g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="o0dwf0b9x"/><path class="qws4jdbvi"/><path class="p19h3jw5g"/></g>`,
		"fallback": "icon-park-outline:signal-tower-one",
	});
}

export default Component;
