import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzwi1ht0q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gxhoqgb1x.css';
import '../../css/n/nr0wbbq5c.css';
import '../../css/c/clc8wolnw.css';
import '../../css/u/uwt9xcc5c.css';
import '../../css/u/upk1dx13t.css';
import '../../css/k/kx5i3bb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzwi1ht0q secondary"/><g class="dt0cm9dhy primary"><path class="gxhoqgb1x"/><path class="nr0wbbq5c"/><path class="clc8wolnw"/><path class="uwt9xcc5c"/><path class="upk1dx13t"/><path class="kx5i3bb3q"/></g>`,
		"fallback": "iconaut:person-running-duo",
	});
}

export default Component;
