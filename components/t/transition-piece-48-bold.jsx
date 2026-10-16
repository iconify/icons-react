import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfoz5gb8g.css';
import '../../css/l/lndetpb3x.css';
import '../../css/o/ous0wrp5f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfoz5gb8g"/><path class="lndetpb3x"/><path class="ous0wrp5f"/>`,
		"fallback": "energy-icons:transition-piece-48-bold",
	});
}

export default Component;
