import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgdg-uoaj.css';
import '../../css/o/odkq52bqx.css';
import '../../css/f/fz9ss0b0g.css';
import '../../css/z/zu8mp8bfd.css';
import '../../css/c/cjknrwpse.css';
import '../../css/c/cm7azwbmb.css';
import '../../css/v/veh62vb5r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgdg-uoaj"/><path class="odkq52bqx"/><path class="fz9ss0b0g"/><path class="zu8mp8bfd"/><path class="cjknrwpse"/><path class="cm7azwbmb"/><path class="veh62vb5r"/>`,
		"fallback": "iconito:lettuce",
	});
}

export default Component;
